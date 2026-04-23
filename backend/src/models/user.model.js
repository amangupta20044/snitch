import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    email:{type: String, required: true, unique: true},
    contact:{type: String, required: false},
    password:{type: String,
         required: function(){
            return !this.googleId; // Password is required only if googleId is not present
         }},
    fullname:{type: String, required: true},
    role:{
        type: String,
        enum: ["buyer", "seller"],
        default: "buyer"
    },
    googleId:{
        type: String,
    }

})
// Hash the password before saving the user this is middleware that runs before saving a user to the database. It checks if the password field has been modified, and if so, it hashes the password using bcrypt with a salt round of 10. 
// The hashed password is then stored in the database instead of the plain text password.
userSchema.pre("save", async function(){
    if (!this.isModified("password")) return;

    const hash=await bcrypt.hash(this.password, 10);
    this.password=hash;
})
// This method is used to compare a plain text password with the hashed password stored in the database. 
// It uses bcrypt's compare function to check if the provided password matches the hashed password. 
// This is typically used during login to verify the user's credentials.
userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

const userModel = mongoose.model("User", userSchema);

export default userModel;