import {
  POSTS_FAILS,
  POSTS_REQUEST,
  POSTS_SUCCESS,
} from "../constants/postsConstant";
import axios from "axios";

export const listPosts = () => async (dispatch) => {

  const accesskey = process.env.NEXT_PUBLIC_ACCESS_KEY;
  const url = process.env.NEXT_PUBLIC_API_URL;

  if (!accesskey) {
    // Handle the case where the API access key is not defined.
    // You can either provide a default key or display an error message.
    console.error("Unsplash API access key not defined!");
    return;
  }

  try {
    dispatch({ type: POSTS_REQUEST });
    const { data } = await axios.get(
      `${url}/photos/random?count=10&client_id=${accesskey}`
    );

    dispatch({
      type: POSTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POSTS_FAILS,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
