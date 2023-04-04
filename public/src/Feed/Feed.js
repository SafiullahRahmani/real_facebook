import React from "react";
import "./feed.css";
import StoryReel from "../StoryReel/StoryReel";
import MessegeSender from "../MessegeSender/MessegeSender";
import Post from "../Post/Post";
const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessegeSender />

      <Post
        profilePic="https://media.licdn.com/dms/image/C4E03AQHc-MVBzkOExA/profile-displayphoto-shrink_800_800/0/1655998571138?e=2147483647&v=beta&t=tXeGe2D2aH1Mmj8UI_VbVNPKGlDBM1z42ySGEUF8ER4"
        message="Der beste grüne Tee ich je hatte!"
        timestamp={"Gerade eben"}
        username="Safiullah Rahmani"
        image="https://cdn.pixabay.com/photo/2023/02/22/19/13/sencha-7807228__480.jpg"
      />
      <Post
        profilePic="https://media.licdn.com/dms/image/C4E03AQHc-MVBzkOExA/profile-displayphoto-shrink_800_800/0/1655998571138?e=2147483647&v=beta&t=tXeGe2D2aH1Mmj8UI_VbVNPKGlDBM1z42ySGEUF8ER4"
        message="Ein neuer Anfang!"
        timestamp={"Vor einer Stunde"}
        username="Safiullah Rahmani"
        image="https://cdn.pixabay.com/photo/2023/03/12/14/51/sleep-7847114_1280.jpg"
      />
      <Post
        profilePic="https://media.licdn.com/dms/image/C4E03AQHc-MVBzkOExA/profile-displayphoto-shrink_800_800/0/1655998571138?e=2147483647&v=beta&t=tXeGe2D2aH1Mmj8UI_VbVNPKGlDBM1z42ySGEUF8ER4"
        message="Der natürliche Spiegel. :D"
        timestamp={"Gestern"}
        username="Safiullah Rahmani"
        image="https://cdn.pixabay.com/photo/2023/03/11/15/28/puddle-7844705_1280.jpg"
      />
      <Post
        profilePic="https://media.licdn.com/dms/image/C4E03AQHc-MVBzkOExA/profile-displayphoto-shrink_800_800/0/1655998571138?e=2147483647&v=beta&t=tXeGe2D2aH1Mmj8UI_VbVNPKGlDBM1z42ySGEUF8ER4"
        message="Dinkelmehl Brot selbst gebacken . :)"
        timestamp={"Vorgestern"}
        username="Safiullah Rahmani"
        image="https://images.pexels.com/photos/7175450/pexels-photo-7175450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
    </div>
  );
};

export default Feed;
