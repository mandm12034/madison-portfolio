import React from 'react';

import Layout from '../components/Layout';
import Contact from '../assets/images/Contact.png';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <h1>How to contact me</h1>
        <span className="image main">
          <img src={Contact} alt="" />
        </span>
        <p>
          Please contact me.
        </p>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
