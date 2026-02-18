import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId, searchTerm = '' }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  const filteredPosts = posts.filter((post) => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
    post.creator.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {filteredPosts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;
