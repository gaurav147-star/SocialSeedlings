import React, { useEffect, useState } from "react";
import Post from "../components/newsFeed/Post";
import { listPosts } from "../actions/postsAction";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";

const Feedpage = () => {
  const dispatch = useDispatch();
  const postsList = useSelector((state) => state.posts);
  const { loading, error, posts } = postsList;
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    dispatch(listPosts());
  }, [dispatch]);

  // Function to fetch more posts
  const loadMorePosts = () => {
    setLoadingMore(true);
    dispatch(listPosts(page+1))
      .then(() => {
        setLoadingMore(false);
        setPage((prevPage) => prevPage + 1);
      })
      .catch((error) => {
        setLoadingMore(false);
      });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loadingMore) {
          loadMorePosts();
        }
      },
    );

    observer.observe(document.getElementById("infinite-scroll-trigger"));

    return () => {
      observer.disconnect();
    };
  }, [loadingMore]);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [posts]);

  return (
    <>
      {loading && <Spinner />}

      {!loading && posts && posts.map((postItem) => <Post key={postItem.id} post={postItem} />)}

      <div id="infinite-scroll-trigger" style={{ height: "1px" }}></div>
      {!loading && loadingMore && <Spinner />}
    </>
  );
};

export default Feedpage;
