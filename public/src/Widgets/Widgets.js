import "./widgets.css";

import React from "react";

const Widgets = () => {
  return (
    <div className="widgets">
      <iframe
        src="https://www.youtube.com/watch?v=B-kxUMHBxNo&t=9797s"
        width="340"
        height="100"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export default Widgets;
