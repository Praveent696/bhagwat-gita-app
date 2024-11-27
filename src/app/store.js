import { configureStore } from '@reduxjs/toolkit';
import chapterReducer from '../features/chapter/chapterSlice';
import verseReducer from '../features/verse/verseSlice';

export const store = configureStore({
  reducer: {
    chapters: chapterReducer,
    verses: verseReducer
  },
})