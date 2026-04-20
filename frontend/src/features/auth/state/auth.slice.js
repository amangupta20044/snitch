import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    // Define the initial state of the auth slice
    initialState: {
        user: null,
        loading: true,
        error: null,
    },
    // Define reducers to handle actions related to authentication
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        }
    }
})

export const { setError, setLoading, setUser } = authSlice.actions
export default authSlice.reducer