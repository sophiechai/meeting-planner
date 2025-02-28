import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import MeetingService from './service';

export const getMeetingsAsync = createAsyncThunk(
  actionTypes.GET_MEETINGS,
  async (userId) => {
    return await MeetingService.getMeetingsBasedOnUserId(userId);
  }
);

export const getMeetingAsync = createAsyncThunk(
    actionTypes.GET_MEETING,
    async () => {
        return await MeetingService.getMeeting();
    }
);

export const addMeetingsAsync = createAsyncThunk(
  actionTypes.ADD_MEETING,
  async (meeting) => {
    return await MeetingService.addMeeting({meeting});
  }
);

export const deleteMeetingAsync = createAsyncThunk(
    actionTypes.DELETE_MEETING,
    async (meeting) => {
        return await MeetingService.deleteMeeting({meeting});
    }
);

export const updateRecipeAsync = createAsyncThunk(
    actionTypes.UPDATE_MEETING,
    async (meeting) => {
        return await MeetingService.updateMeeting({meeting});
    }
);
