import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memora</Typography>
      </AppBar>
      <Grow in>
        <Container>
          <TextField 
            name="search" 
            variant="outlined" 
            label="Search memories..." 
            fullWidth 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ marginBottom: '20px' }}
          />
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} searchTerm={searchTerm} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
