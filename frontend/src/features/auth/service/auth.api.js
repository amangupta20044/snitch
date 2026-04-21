// backend ke API calls ke liye service file
import axios from 'axios';

const authApiInstance = axios.create({
    baseURL: '/api/auth', // backend ka URL
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

export async function login({email,password}) {
    const response = await authApiInstance.post("/login",{
        email,
        password
    })
    return response.data;
}

