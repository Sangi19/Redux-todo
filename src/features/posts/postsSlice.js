import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    { id:'1',title:"learn redux", content:"action,reducer,store,app"},
    { id:'2',title:"learn RTK", content:"Redux tool kit"}
]
const postsSlice=createSlice({
    name:'posts',
    initialState,
    reducers:{}
})

export default postsSlice.reducer