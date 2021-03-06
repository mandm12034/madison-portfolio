import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <h1>Data Analysis</h1>
        <p>
        While earning my degree in Management Information Systems, 
        I was enrolled in classes like MIS analysis and Design 
        and Intro to Business Analytics. Data Analysis is always changing 
        and strive to learn more every day about it.
        </p>
        <p>
        I was also enrolled in <b>Big Data</b> which helped me learn the ropes of how
         to analyze big data. Since this was only a semester long class, I only 
        learning the basics of one software – Orange. We covered data 
        cleansing and Machine Learning(ML), which are essential tools in the modern enterprise
        IT environment.
        </p>
        <p>
        I also took <b>Business Intelligence</b> which deals with how to 
        visualize big data. We used the software, Tableau, 
        which is linked in the “Tableau” tab of my website if you would 
        like to look at my public account. My class taught me how 
        to join data, and build some basic charts like bar charts and 
        line charts, but we also got into learning a little bit 
        more about some more complex visualizations like heat maps and 
        tree maps as well.
        </p>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
