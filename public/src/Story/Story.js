import { Avatar } from "@mui/material";
import "./story.css";

function Story({ image, profileSrc, title }) {
  return (
    <div style={{ backgroundImage: { image } }} className="story">
      <Avatar className="story__avatar" src={profileSrc} />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
