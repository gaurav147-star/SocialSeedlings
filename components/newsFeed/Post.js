import React, { useContext } from "react";
import styles from "../../styles/Post.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import DarkModeContext from "../../context/DarkModeContext";
import { useDispatch } from "react-redux"; // Removed unnecessary useSelector import
import { dataProfile } from "../../actions/profileAction";
import { PiShareFatFill } from "react-icons/pi";
import { BsHeart, BsHeartFill, BsChatLeft } from "react-icons/bs";

const Post = ({ post }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleUsernameClick = (username) => {
    // Navigate to the profile page
    dispatch(dataProfile(username));
    router.push("/Profilepage");
  };
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <>
      <div
        className={`${styles.card} ${darkMode ? styles.dark : styles.light}`}
      >
        <div className={styles.postusername}>
          <div>
            <img src={post.user?.profile_image?.medium} alt="profile of user" />
          </div>
          <div className={styles.userDetail}>
            <span
              onClick={() => handleUsernameClick(post.user?.instagram_username)}
              className={styles.username}
            >
              {post.user?.instagram_username}
            </span>
            <span>{post.user?.location?.name}</span>
          </div>
        </div>
        <Image
          className={styles.postImage}
          src={post.urls?.small}
          alt="post of user"
          width={500}
          height={500}
        />
        <div className={styles.status}>
          <div className={styles.like}>
            {post.liked_by_users ? (
              <BsHeartFill style={{ color: "red" }} size={25} />
            ) : (
              <BsHeart size={25} />
            )}

            <BsChatLeft size={25} />
            <PiShareFatFill size={25} />
          </div>
          <b>{post.likes} likes</b>
          <div className={styles.btop}>
            <b>{post.user?.instagram_username}</b>
            <span>{post.alt_description}</span>
          </div>
        </div>
        <div className={styles.commentInput}>
          <textarea placeholder="Add a comment…"></textarea>
          <img src="https://i.stack.imgur.com/twIm6.png" alt="comment icon" />
        </div>
      </div>
    </>
  );
};

export default Post;
