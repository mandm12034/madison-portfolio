import React from 'react';

import Layout from '../components/Layout';
import pic1 from '../assets/images/01.jpg';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <h1>About Me</h1>
        <span className="image main">
          <img src={pic1} alt="" />
        </span>
        <p>
          I love Me.
        </p>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
