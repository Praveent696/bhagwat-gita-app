import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getChapters } from '../../services/apiClient';

const initialState = {
  chapters: [],
  favorites: [],
  isLoading: false,
  error: null
}

export const fetchChapters = createAsyncThunk(
    'users/fetchChapters',
    async (thunkAPI) => {
      const response = await getChapters();
      return response
    }
  )

export const chapterSlice = createSlice({
  name: 'chapter',
  initialState,
  reducers: {
    reset: (state) => {
      state = initialState
    },
    addOrRemoveFavorite: (state, action) => {
        switch (action.type) {
            case 'ADD':
                if (!state.favorites.includes(action.payload)) {
                    state.favorites.push(action.payload);
                }
                break;
            case 'REMOVE':
                state.favorites = state.favorites.filter(x => x !== action.payload);
                break;
            default:
                break;
        }
    }
  },
  extraReducers:  (builder) => {
    builder
      .addCase(fetchChapters.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.chapters = [];
      })
      .addCase(fetchChapters.fulfilled, (state, action) => {
        state.isLoading = false;
        state.chapters = action.payload;
        state.error = null;
      })
      .addCase(fetchChapters.rejected, (state, action) => {
        state.isLoading = false;
        state.chapters = [];
        state.error = action.error
      });
  }
})

// Action creators are generated for each case reducer function
export const { reset, addOrRemoveFavorite } = chapterSlice.actions;

export default chapterSlice.reducer