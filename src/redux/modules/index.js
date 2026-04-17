//index.js
import { combineReducers } from "redux";
import users from "./users";
import alerts from "./alerts";
import profiles from "./profiles";
import posts from "./posts";

//export a combined reducer
export default combineReducers({ users, alerts, profiles, posts });
