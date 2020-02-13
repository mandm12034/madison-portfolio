import React from 'react';

import Layout from '../components/Layout';
import pic1 from '../assets/images/01.jpg';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <h1>Data Analysis</h1>
        <span className="image main">
          <img src={pic1} alt="" />
        </span>
        <p>
        While earning my degree in Management Information Systems, 
        I have been enrolled in classes like MIS analysis and Design 
        and Intro to Business Analytics. Data Analysis is always changing 
        and I learn more and more every day about it.
        </p>
        <p>
        I am also enrolled in Big Data which helps me learn the ropes of how
         to analyze big data. Since this is only a semester long class, I am only 
        learning the basics of one software – Orange. So far we have covered data 
        cleansing and machine learning, which makes me really excited to learn 
        more about it.
        </p>
        <p>
        I am also taking Business Intelligence which deals with how to 
        basically visualize big data. We are using the software Tableau, 
        which is linked in the “Tableau” tab of my website if you would 
        like to look at my public account. Basically, we have learned how 
        to join data, and build some basic charts like bar charts and 
        line charts, but we have also gotten into learning a little bit 
        more about some more complex visualizations like heat maps and 
        tree maps as well. I update my Tableau Public account around 
        every other week.
        </p>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
