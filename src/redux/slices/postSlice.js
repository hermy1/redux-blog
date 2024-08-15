import { createSlice, nanoid } from "@reduxjs/toolkit";
import {sub} from 'date-fns';

const initialState = [
    {   id: 1,      title: "First Post!",    content: "Hello! this is the content in thos poe",   userId: 1,   date: sub(new Date(), {minutes: 10}).toISOString(),reactions: {thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0}, userId: 1  },
    {   id: 2,      title: "Second Post",    content: "More text, this is sujust meljwe jlweijrlew",   date: sub(new Date(), {minutes: 5}).toISOString(), reactions: {thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0}, userId: 2  },
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content,userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId,
                        reactions: {thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0}
                    }
                }
            },
        },
        postReactionAdded(state, action) {
            const {postId, reaction} = action.payload;
            const existingPost = state.find(post => post.id === postId);
            if(existingPost) {
                existingPost.reactions[reaction]++;
            }
        }
    }
});

export const getallPosts = (state) => state.posts;
export const {postAdded, postReactionAdded} = postsSlice.actions;
export default postsSlice.reducer;