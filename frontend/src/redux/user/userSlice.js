import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser:null,
    error:null,
    loadding:false
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        signInStart: (state)=>{
            state.loadding=true;
            state.error = null;
        },
        signInSuccess:(state,action)=>{
            state.currentUser = action.payload;
            state.loadding = true;
            state.error = null;
        },
        signInFailure: (state,action)=>{
            state.loadding = false;
            state.error = action.payload;
        }
    }
});
export const {signInStart,signInSuccess,signInFailure} = userSlice.actions;
export default userSlice.reducer;