import React from 'react';

import Layout from '../components/Layout';
import MadisonFSU from '../assets/images/MadisonFSU.jpeg';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <h1>About Me</h1>
        <span className="image main">
          <img src={MadisonFSU} alt="" />
        </span>
        <p>
          I am currently a senior at Florida State University majoring
          in Management Information Systems and minoring in Hospitality
          Management. <br/><br/>
          I am involved on campus with my sorority, Alpha Gamma Delta. I currently
          volunteer with my sisters in a variety of charitable partnerships in the Tallahassee
          community.
        </p>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
