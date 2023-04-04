import Story from "../Story/Story";
import "./storyReel.css";
import Alola_Wrak from "../images/Alola Wrak.jpg";
import photo1 from "../images/photo-1.jpg";
import Anastasia_Lubeck from "../images/Anastasia Lubeck.jpg";
import photo2 from "../images/photo-2.jpg";
import Anna_Beureuth from "../images/Anna Beureuth.jpg";
import photo3 from "../images/photo-1.jpg";
import John_Smith from "../images/John Smith.jpg";
import photo4 from "../images/photo-4.jpg";
import Sarah_Jäger from "../images/Sarah Jäger.jpg";
import photo12 from "../images/photo-12.jpg";

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story image={photo1} profileSrc={Alola_Wrak} title="Alola Wrak" />
      <Story
        image={photo2}
        profileSrc={Anastasia_Lubeck}
        title="Anastasia Lubeck"
      />
      <Story image={photo3} profileSrc={Anna_Beureuth} title="Anna Beureuth" />
      <Story image={photo4} profileSrc={John_Smith} title="John Smith" />
      <Story image={photo12} profileSrc={Sarah_Jäger} title="Sarah Jäger" />
    </div>
  );
};

export default StoryReel;
