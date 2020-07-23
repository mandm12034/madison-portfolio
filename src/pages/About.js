import React from 'react';

import Layout from '../components/Layout';
import MadisonGradPic from '../assets/images/MadisonGradPic.jpeg';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <h1>About Me</h1>
        <span className="image main">
          <img src={MadisonGradPic} alt=""/>
        </span>
        <p>
          I am proud to say that I am a graduate from Florida State University
          with a bachelor's degree in Management Information Systems and a minor
          in Hospitality Management.<br/>
        </p>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
