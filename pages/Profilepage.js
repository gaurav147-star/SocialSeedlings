import React from "react";
import styles from "../styles/Profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import { BsArrowLeftCircle } from "react-icons/bs";
import { useRouter } from "next/router";

const Previous = () => {
  const router = useRouter();
  const navigate = () => {
    router.push("/");
  };
  return (
    <div className={styles.previousPage} onClick={navigate}>
      <BsArrowLeftCircle style={{ margin: "0px 5px" }} />
      <span>Back</span>
    </div>
  );
};

const Profilepage = () => {
  const profileData = useSelector((state) => state.profile);
  const { loading, error, profile } = profileData;

  return (
    <>
      <Previous />
      {loading ? (
        <Spinner />
      ) : error ? (
        <div className={styles.dataNot}>Error: {error.message}</div>
      ) : !profile ? (
        <div className={styles.dataNot}>User not exist</div>
      ) : (
        <>
          <header>
            <div className={styles.container}>
              <div className={styles.profile}>
                <div className={styles["profile-image"]}>
                  <img src={profile?.profile_image?.large} alt="" />
                </div>

                <div className={styles["profile-user-settings"]}>
                  <h1 className={styles["profile-user-name"]}>
                    {profile.username}
                  </h1>

                  <button
                    className={`${styles.btn} ${styles["profile-edit-btn"]}`}
                  >
                    Edit Profile
                  </button>

                  <button
                    className={`${styles.btn} ${styles["profile-settings-btn"]}`}
                    aria-label="profile settings"
                  >
                    <i
                      className={`${styles.fas} ${styles["fa-cog"]}`}
                      aria-hidden="true"
                    ></i>
                  </button>
                </div>

                <div className={styles["profile-stats"]}>
                  <li>
                    <span className={styles["profile-stat-count"]}>
                      {profile.photos ? profile.photos.length : 0}
                    </span>{" "}
                    posts
                  </li>
                  <li>
                    <span className={styles["profile-stat-count"]}>
                      {profile.followers_count}
                    </span>{" "}
                    followers
                  </li>
                  <li>
                    <span className={styles["profile-stat-count"]}>
                      {profile.following_count}
                    </span>{" "}
                    following
                  </li>
                </div>

                <div className={styles["profile-bio"]}>
                  <span className={styles["profile-real-name"]}>
                    {`${profile.first_name} ${profile.last_name}`}
                  </span>{" "}
                  <p>{profile.bio}</p>
                </div>
              </div>
            </div>
          </header>

          <main>
            <div className={styles.container}>
              <div className={styles.gallery}>
                {profile.photos.map((pic, index) => (
                  <div
                    className={styles["gallery-item"]}
                    tabIndex="0"
                    key={index}
                  >
                    <img
                      src={pic.urls.regular}
                      className={styles["gallery-image"]}
                      alt=""
                    />

                    <div className={styles["gallery-item-info"]}>
                      <ul>
                        <li className={styles["gallery-item-likes"]}>
                          <span className={styles["visually-hidden"]}>
                            Likes:
                          </span>
                          <i
                            className={`${styles.fas} ${styles["fa-heart"]}`}
                            aria-hidden="true"
                          ></i>
                        </li>
                        <li className={styles["gallery-item-comments"]}>
                          <span className={styles["visually-hidden"]}>
                            Comments:
                          </span>
                          <i
                            className={`${styles.fas} ${styles["fa-component"]}`}
                            aria-hidden="true"
                          ></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              {/* <div className={styles.loader}></div> */}
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default Profilepage;
