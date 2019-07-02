import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    margin: "auto",
  },
  cardHeader: {
    textAlign: 'Center'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  avatar: {
    backgroundColor: "black",
  },
  cardHeader:{
    textAlign: "center",

  },
  tradeButton:{
    flexGrow: 1
  },
  questionButton:{
    flexGrow: .5
  }
});

class Post extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader
          title={this.props.curPost.Description}
          subheader={this.props.curPost.Category}
          className = {classes.cardHeader}
        />
        <CardMedia
          className={classes.media}
          image={this.props.curPost.Url}
          title="image"
        />
        <CardContent>
          <Typography variant = "h5">
            Value: {this.props.curPost.value}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <Button className = {classes.tradeButton} aria-label="Trade">
            Trade
          </Button>
          <Button className = {classes.questionButton} aria-label="Share">
            Ask A Question
          </Button>
        </CardActions>
      </Card>
    )  
  }  
}      
export default withStyles(styles)(Post);