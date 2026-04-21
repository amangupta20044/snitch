// state and service layer ko connect karne ke liye custom hook

import { useDispatch, useSelector } from "react-redux";
import { setError, setLoading, setUser } from "../state/auth.slice";
import { register ,login} from "../service/auth.api";

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
    async function handleLogin({ email, password }) {
        try {
            const data = await login({ email, password })
            dispatch(setUser(data.user))
            return data.user;
        } catch (error) {
            console.error("Login error:", error.response?.data || error.message);
            throw error;
        }
    }
    return { handleRegister, handleLogin }
}