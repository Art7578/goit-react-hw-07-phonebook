import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import { filterContact } from "./contactsAction";

const filter = createReducer('', {
    [filterContact]: (_, {payload}) => payload,
});

export default combineReducers({filter});