import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Screenshot from "./images/Screenshot.png"

function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 240 }}
        image={props.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><b>Share</b></Button>
        <Button size="small"><b>Learn More</b></Button>
      </CardActions>
    </Card>
  );
}

const SubjectSelection = () => {
    return (
        <div>
        <MediaCard image={Screenshot} />
        <MediaCard image={Screenshot} />
        </div>
    )
}

export default SubjectSelection;