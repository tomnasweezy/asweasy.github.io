import "./App.css";
import { motion } from "framer-motion";
import { useState } from "react";
import netherlands from "./Assets/netherlands.png"; // with import
import github from "./Assets/github.svg"; // with import
import linkedin from "./Assets/linkedin.svg"; // with import
import resume from "./Assets/resume.svg"; // with import
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
        )}
        {!biog && (
          <div id="biowraper" className="biowraper">
            <p id="bio" className="bio">
              Hi, I'm Ahmed<br></br>
              <span className="ltbca">like to be called an</span>
            </p>
            <div className="morphing">
              <p className="POS">Devops Engineer</p>
              <p className="POS">Implementation Manager</p>
              <p className="POS">Integration Engineer</p>
            </div>
            <div className="resttextwrapper">
              <p>
                currently living in the Netherlands
                <img className="nlimage" src={netherlands} />
                <br></br>
                whom will always strive for innovation and efficiency in my
                work, regardless of my role, as long as I have support.
              </p>
            </div>
            <div className="infowrapper">
              <div>
                {/* https://reactsvgicons.com/search?q=linkedIn */}
                <a href="https://github.com/tomnasweezy">
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="black"
                    height="1em"
                    width="1em"
                  >
                    <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                  </svg>
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/ahmed-hisham-431069120/">
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="black"
                    height="1em"
                    width="1em"
                  >
                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                  </svg>
                </a>
              </div>

              <div>
                <a href="https://drive.google.com/file/d/1NALHNTPv1JlSY7ikJKWipbKl9Rhg9XfH/view?usp=sharing">
                  {/* <img className="resume" src={resume} /> */}
                  <svg
                    viewBox="0 0 512 512"
                    fill="black"
                    height="1em"
                    width="1em"
                  >
                    <path d="M428 224H288a48 48 0 01-48-48V36a4 4 0 00-4-4h-92a64 64 0 00-64 64v320a64 64 0 0064 64h224a64 64 0 0064-64V228a4 4 0 00-4-4zm-92 160H176a16 16 0 010-32h160a16 16 0 010 32zm0-80H176a16 16 0 010-32h160a16 16 0 010 32z" />
                    <path d="M419.22 188.59L275.41 44.78a2 2 0 00-3.41 1.41V176a16 16 0 0016 16h129.81a2 2 0 001.41-3.41z" />
                  </svg>
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
