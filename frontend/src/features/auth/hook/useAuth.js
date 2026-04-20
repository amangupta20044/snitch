// state and service layer ko connect karne ke liye custom hook

import { useDispatch, useSelector } from "react-redux";
import { setError, setLoading, setUser } from "../state/auth.slice";
import { register } from "../service/auth.api";

export const useAuth = () => {
    const dispatch = useDispatch();
    async function handleRegister({ email, contact, password, fullname,isSeller=false }) {
        try {
            const data = await register({ email, contact, password, fullname,isSeller })
            dispatch(setUser(data.user))
        } catch (error) {
            console.error("Registration error:", error.response?.data || error.message);
            throw error;
        }
    }
    return { handleRegister }
}