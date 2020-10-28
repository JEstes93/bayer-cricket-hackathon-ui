import React, { useEffect } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, makeStyles } from '@material-ui/core';
import { comingSoon } from '../../util/helpers';
import daugherty from '../../assets/daugherty.png';
import slalom from '../../assets/slalom.jpg';

const useStyles = makeStyles((theme) => ({
  mediaDaugherty: {
    height: 0,
    paddingTop: '100%', // 16:9
  },
  mediaSlalom: {
    height: 0,
    paddingTop: '60%', // 16:9
    marginBottom: '20%',
    marginTop: '20%',
  },
  card: {
    height: '80%',
    width: '80%',
  },
  cardContent: {
    paddingTop: '40%',
    paddingBottom: '40%',
  },
}));

export default function Sponsor() {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center" direction="column">
      <Grid container className="gameplayContainer" justify="center" alignItems="center">
        <Grid container xs={4} justify="center" alignItems="center" style={{ minHeight: '22.5vh' }}>
          <Card className={classes.card}>
            <CardMedia className={classes.mediaDaugherty} image={daugherty} title="Daugherty" />
            <CardActions>
              <Button size="small" onClick={comingSoon}>
                Join
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid container xs={4} justify="center" alignItems="center" style={{ minHeight: '22.5vh' }}>
          <Card className={classes.card}>
            <CardMedia className={classes.mediaSlalom} image={slalom} title="Slalom" />
            <CardActions>
              <Button size="small" onClick={comingSoon}>
                Join
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid container xs={4} justify="center" alignItems="center" style={{ minHeight: '22.5vh' }}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <h1>Sponsor</h1>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={comingSoon}>
                Join
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}
