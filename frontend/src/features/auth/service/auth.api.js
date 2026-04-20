// backend ke API calls ke liye service file
import axios from 'axios';

const authApiInstance = axios.create({
    baseURL: 'http://localhost:3000/api/auth', // backend ka URL
    withCredentials: true, // cookies ke liye
});

export async function register({email,contact,password,fullname,isSeller}) {
    const response = await authApiInstance.post("/register",{
        email,
        contact,
        password,
        fullname,
        isSeller
    })
    return response.data;
}

