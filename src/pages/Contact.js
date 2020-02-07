import React from 'react';

import Layout from '../components/Layout';
import Contact2 from '../assets/images/Contact2.png';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <h1>How to contact me</h1>
        <span className="image">
          <img src={Contact2} alt="" />
        </span>
        <h2>My mailbox is always open for new opportunities.
          <br/>Please feel free to reach out!</h2>
        <p>
          <b>EMAIL:</b> mandm12034@gmail.com
        </p>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
