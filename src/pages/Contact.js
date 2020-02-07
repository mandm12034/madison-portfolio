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
