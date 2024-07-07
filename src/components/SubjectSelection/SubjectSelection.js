import "./SubjectSelection.css";
import images from "../images";
import MediaCard from "./CardComponent/CardComponent";

const SubjectSelection = () => {
  return (
    <>
      <h1 id="coursesHeading">Our Courses</h1>
      <div className="flex">
        <MediaCard image={images.history} heading="HISTORY" description="" />
        <MediaCard image={images.chemistry} heading="CHEMISTRY" />
        <MediaCard image={images.science} heading="SCIENCE" />
        <MediaCard image={images.physics} heading="PHYSICS" />
      </div>
      <div className="flex">
        <MediaCard image={images.computer} heading="COMPUTER SCIENCE" />
        <MediaCard image={images.biology} heading="BIOLOGY" />
        <MediaCard image={images.english} heading="ENGLISH" />
        <MediaCard image={images.math} heading="MATH" />
      </div>
    </>
  );
};

export default SubjectSelection;
