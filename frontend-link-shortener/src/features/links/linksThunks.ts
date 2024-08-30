import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import {LinkType} from '../../types';

export const createLink = createAsyncThunk<{ shortUrl: string }, LinkType>(
  'links/create',
  async (link: LinkType) => {
    const {data : createdLink} = await axiosApi.post('/links', link);
    return createdLink;
  }
);