import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// sx implies styling
function MediaCard(props) {
  return (
    <Card sx={{ width: 250,marginRight: 5, marginBottom: 3, marginTop: 1.5 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={props.image}
        title="green iguana"
      />
      <CardContent sx={{ paddingBottom: 0, paddingLeft: 1.5 }}>
        <Typography
          sx={{
            marginTop: 1,
            marginBottom: 0,
            fontSize: 20,
            textTransform: "uppercase",
            fontWeight: 600,
          }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {props.heading}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography> */}
      </CardContent>
      <CardActions>
        <Button size="small">
          <b>
            <a href={props.courselink}>Lessons</a>
          </b>
        </Button>
        <Button size="small">
          <b>
            <a href={props.assignmentlink}>Assignments</a>
          </b>
        </Button>
      </CardActions>
    </Card>
  );
}

export default MediaCard;
