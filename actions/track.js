import * as actiontypes from './constants/actionTypes';

export function setTracks(tracks) {
    return {
        type: actiontypes.TRACKS_SET,
        tracks
    };
};