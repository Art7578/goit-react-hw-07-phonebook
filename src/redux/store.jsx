import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { contactsApi } from "services/contactsAPI";
import filter from './contacts/contactsReducer';

export const store = configureStore({
    reducer: {filter, [contactsApi.reducerPath]: contactsApi.reducer},
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware(),
        contactsApi.middleware,
    ],
    logger,
    devTools: process.env.NODE_ENV === 'development',
});