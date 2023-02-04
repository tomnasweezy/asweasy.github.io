import "./App.css";
import { motion } from "framer-motion";
import { useState } from "react";
import netherlands from "./Assets/netherlands.png"; // with import
import github from "./Assets/github.png"; // with import
import linkedin from "./Assets/linkedin.png"; // with import
import resume from "./Assets/resume.png"; // with import
import AssignmentIcon from "@mui/icons-material/Assignment";

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "black",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
  },
};

function App() {
  const [biog, setbio] = useState(true);
  const onhover = () => {
    document.getElementById("InnerBox").style.scale = 2.6;

    setTimeout(() => {
      document.getElementById("biowraper").style.background = "#FFA0AE";
      document.getElementById("biowraper").style.opacity = 1;
      document.getElementById("InnerBox").style.cursor = "default";
    }, 1000);
    setbio(false);
  };
  return (
    <div className="parentBox">
      {/* <div id="profileWrapper">
        <p className="bio">My Name is Ahmed Hisham</p>
      </div> */}
      <div id="InnerBox" className="InnerBox" onMouseOver={onhover}>
        {biog && (
          <p id="hello" className="hello">
            Hey
          </p>
        )}
        {!biog && (
          <div id="biowraper" className="biowraper">
            <div className="namewrapper">
              {/* https://danmarshall.github.io/google-font-to-svg-path/ */}
              <svg
                className="svg1"
                viewBox="0 0 26.65 31.05"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="svgGroup" stroke="#590505" className="svg1">
                  <path
                    className="path"
                    d="M 13.4 3.4 L 13.2 3.4 A 1210.008 1210.008 0 0 0 12.599 5.088 Q 12.332 5.838 12.039 6.666 A 2266.306 2266.306 0 0 0 11.425 8.4 A 1837.249 1837.249 0 0 0 9.459 13.991 A 1995.392 1995.392 0 0 0 9.325 14.375 A 859.363 859.363 0 0 1 8.281 17.344 A 690.598 690.598 0 0 1 7.3 20.1 L 7.05 20.85 L 6.3 23.1 A 568.478 568.478 0 0 1 5.597 25.195 A 649.764 649.764 0 0 1 5.35 25.925 Q 4.85 27.4 4.4 28.675 Q 3.997 29.816 3.755 30.576 A 31.389 31.389 0 0 0 3.7 30.75 Q 3.35 30.9 2.975 30.975 A 3.396 3.396 0 0 1 2.669 31.021 Q 2.501 31.039 2.308 31.046 A 7.164 7.164 0 0 1 2.05 31.05 A 2.561 2.561 0 0 1 1.076 30.867 A 2.426 2.426 0 0 1 0.625 30.625 A 1.365 1.365 0 0 1 0.061 29.793 Q 0.002 29.555 0 29.269 A 2.865 2.865 0 0 1 0 29.25 Q 0 28.8 0.15 28.325 A 22.462 22.462 0 0 1 0.313 27.831 A 28.598 28.598 0 0 1 0.5 27.3 A 849.423 849.423 0 0 1 0.989 25.92 Q 1.208 25.3 1.455 24.608 A 1734.768 1734.768 0 0 1 1.975 23.15 A 1152.184 1152.184 0 0 1 2.894 20.588 A 1486.798 1486.798 0 0 1 3.9 17.8 A 480.345 480.345 0 0 1 6.028 12.041 A 521.746 521.746 0 0 1 6.1 11.85 Q 7.25 8.8 8.35 5.9 Q 9.45 3 10.4 0.6 A 3.137 3.137 0 0 1 10.673 0.481 Q 11.038 0.341 11.6 0.2 Q 12.4 0 13.25 0 Q 14.25 0 15.175 0.3 A 2.533 2.533 0 0 1 15.676 0.52 Q 15.973 0.694 16.155 0.936 A 1.369 1.369 0 0 1 16.35 1.3 A 174.388 174.388 0 0 1 17.554 4.291 Q 18.175 5.875 18.837 7.639 A 282.932 282.932 0 0 1 18.925 7.875 A 408.983 408.983 0 0 1 21.002 13.556 A 454.892 454.892 0 0 1 21.7 15.525 A 759.625 759.625 0 0 1 24.054 22.309 A 691.449 691.449 0 0 1 24.375 23.25 A 773.772 773.772 0 0 1 25.581 26.825 A 564.864 564.864 0 0 1 26.65 30.05 A 2.427 2.427 0 0 1 25.982 30.637 A 2.98 2.98 0 0 1 25.725 30.775 A 2.834 2.834 0 0 1 24.708 31.04 A 3.396 3.396 0 0 1 24.45 31.05 A 3.402 3.402 0 0 1 23.9 31.009 Q 23.609 30.961 23.376 30.858 A 1.53 1.53 0 0 1 23 30.625 A 2.046 2.046 0 0 1 22.653 30.235 Q 22.371 29.833 22.15 29.2 L 19.4 21.05 L 19 19.65 Q 18 16.6 16.925 13.5 Q 15.85 10.4 14.925 7.75 A 2201.722 2201.722 0 0 0 14.483 6.484 Q 13.85 4.675 13.4 3.4 Z M 5.1 22.55 L 21.15 22.55 L 20.35 19.2 L 6.4 19.2 L 5.1 22.55 Z"
                  />
                </g>
              </svg>
            </div>
            <div className="poswrapper">
              <p id="bio" className="bio">
                Hi, I'm Ahmed an
              </p>
              <div className="morphing">
                <p className="POS">Integration Engineer</p>
                <p className="POS">Implementation Manager</p>
                <p className="POS">Solution Engineer</p>
                <p className="POS">Front-end developer</p>
              </div>
            </div>
            <p className="live">
              currently living in the Netherlands
              <img className="nlimage" src={netherlands} />
            </p>
            <br></br>
            <p className="live"> whom will always strive for innovation and</p>
            <br></br>
            <p className="live">efficiency in my work, regardless</p>
            <br></br>
            <p className="live">of my role, as long as I have support.</p>
            <div className="infowrapper">
              <div>
                <a href="https://github.com/tomnasweezy">
                  <img src={github} />
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/ahmed-hisham-431069120/">
                  <img src={linkedin} />
                </a>
              </div>
              <div>
                <a href="https://drive.google.com/file/d/1NALHNTPv1JlSY7ikJKWipbKl9Rhg9XfH/view?usp=sharing">
                  <img src={resume} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
