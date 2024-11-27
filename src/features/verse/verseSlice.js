import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getVerses } from '../../services/apiClient';

const initialState = {
  verses: [],
  favorite: false,
  isLoading: false,
  error: null
}

export const fetchVerses = createAsyncThunk(
    'users/fetchVerses',
    async (ch, thunkAPI) => {
      const response = await getVerses(ch);
      return response
    }
  )

export const verseSlice = createSlice({
  name: 'verse',
  initialState,
  reducers: {
    reset: (state) => {
      state = initialState
    },
    addOrRemoveFavorite: (state, action) => {
        state.favorite = true;
    }
  },
  extraReducers:  (builder) => {
    builder
      .addCase(fetchVerses.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.verses = [];
      })
      .addCase(fetchVerses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.verses = action.payload;
        state.error = null;
      })
      .addCase(fetchVerses.rejected, (state, action) => {
        state.isLoading = false;
        state.verses = [];
        state.error = action.error
      });
  }
})

// Action creators are generated for each case reducer function
export const { reset, addOrRemoveFavorite } = verseSlice.actions;

export default verseSlice.reducer;