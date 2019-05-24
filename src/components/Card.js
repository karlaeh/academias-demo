import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IMG from '../images/Karla.jpg';
import Grid from '@material-ui/core/Grid';

const styles = {
  card: {
    width: 345,
  },
  media: {
    height: 300,
  },
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
    >
  
    <Grid item xs={6}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image= {IMG}
            title="Kiki"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Karla Esquivel
            </Typography>
            <Typography component="p">
              karla.eh11@gmail.com
            </Typography>
            <Typography component="p">
              8110662930
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>      
    </Grid>
  );
}


export default withStyles(styles)(MediaCard);