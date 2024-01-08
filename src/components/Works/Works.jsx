import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import PARASCADD from "../../img/PARASCADD.png";
import PRODASH from "../../img/PRODASH.png";
import E2EPMS from "../../img/E2EPMS.png";
import WHAM from "../../img/WHAM.png";
import PROMA from "../../img/PROMA.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Products</span>
          <spane>
          PARASCADD develops IT solutions equipped with advanced technology that provide
            <br />
            the competitive edge that businesses need to succeed in the 21st-century business world.
            <br />
            We guide businesses by providing professional EPC software, web solutions, and services.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle prodash-modify">
            <img src={PRODASH} alt="PRODASH" />
          </div>
          <div className="w-secCircle e2epms-modify">
            <img src={E2EPMS} alt="E2EPMS" />
          </div>
          <div className="w-secCircle">
            <img src={PARASCADD} alt="PARASCADD" style={{height:100,width:150}} />
          </div>{" "}
          <div className="w-secCircle">
            <img src={WHAM} alt="WHAM" />
          </div>
          <div className="w-secCircle">
            <img src={PROMA} alt="PROMA" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
