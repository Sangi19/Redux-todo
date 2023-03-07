import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '.././src/features/posts/postsSlice'

export const store=configureStore({
    reducer:{
        posts:postsReducer
    }
})