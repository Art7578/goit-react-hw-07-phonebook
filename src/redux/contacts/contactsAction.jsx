import { createAction } from "@reduxjs/toolkit";
import { FILTER } from "./contactsType";
export const filterContact = createAction(FILTER);