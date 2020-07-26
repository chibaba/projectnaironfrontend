import { React } from "react";

import Header from "../component/Header/Header";

import Section1 from "../component/section1/Section1";
import Section2 from "../component/section1/Section2";
import Section3 from "../component/section1/Section3";
import Section4 from "../component/section1/Section4";
import Section5 from "../component/section1/Section5";
import Section6 from "../component/section1/Section6";

const Landing = (props) => {
  return (
    <div>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  );
};

export default Landing;
