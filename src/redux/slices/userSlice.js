import {createSlice} from '@reduxjs/toolkit';
const initialState = [
    {id:'032', name:'John Doe',email:'johndoes@gmail.com'},
    {id:'033', name:'Janet Doe',email:'ja@gmail.com'}

]
const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {


    }
})

export const getAllUsers = (state) => state.users;
export default userSlice.reducer;

