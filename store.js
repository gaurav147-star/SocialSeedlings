import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { postsReducer } from "./reducers/postsReduces";
import { profileReducer } from "./reducers/profileReducer";

const reducer = combineReducers({
  posts: postsReducer,
  profile: profileReducer,
});

const middleware = [thunk];
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
