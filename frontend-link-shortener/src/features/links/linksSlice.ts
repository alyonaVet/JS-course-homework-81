import {createSlice} from '@reduxjs/toolkit';
import {Link} from '../../types';
import {createLink} from './linksThunks';

export interface LinksState {
  link: Link | null;
  isCreatingLink: boolean;
}

const initialState: LinksState = {
  link: null,
  isCreatingLink: false,
};

export const linksSlice = createSlice({
  name: 'links',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createLink.pending, (state) => {
        state.isCreatingLink = true;
      })
      .addCase(createLink.fulfilled, (state) => {
        state.isCreatingLink = false;
      })
      .addCase(createLink.rejected, (state) => {
        state.isCreatingLink = false;
      });
  },
  selectors: {
    selectLinks: (state) => state.link,
    selectCreatingLink: (state) => state.isCreatingLink,
  }
});

export const linksReducer = linksSlice.reducer;

export const {
  selectLinks,
  selectCreatingLink,
} = linksSlice.selectors;
