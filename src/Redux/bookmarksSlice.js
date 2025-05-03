// src/redux/bookmarksSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookmarkedJobs: [],
};

const bookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    addBookmark: (state, action) => {
      state.bookmarkedJobs.push(action.payload);
    },
    removeBookmark: (state, action) => {
      state.bookmarkedJobs = state.bookmarkedJobs.filter(
        (job) => job.id !== action.payload.id
      );
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;
