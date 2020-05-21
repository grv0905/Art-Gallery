import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Imagecard from '../components/Imagecard';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

export default function Content() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <Imagecard/>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Imagecard/>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Imagecard/>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Imagecard/>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Imagecard/>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Imagecard/>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Imagecard/>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Imagecard/>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Imagecard/>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Imagecard/>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Imagecard/>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Imagecard/>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Imagecard/>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Imagecard/>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Imagecard/>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Imagecard/>
        </Grid>
      </Grid>
    </div>
  );
}
