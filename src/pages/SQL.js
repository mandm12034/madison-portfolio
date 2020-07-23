import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <h1>SQL</h1>
        <p>
        While in college, I took a class called Database Management 
        which helped me learn more about the basics of SQL Server. 
        In order to have SQL server work on my Mac, I also had to 
        install a virtual machine on my computer. This process 
        took about 4 or 5 hours altogether with the help of my 
        fellow students and teacher, but I finally got it up and 
        running just in time. I appreciate that I had the 
        opportunity to challenge myself by installing the VM 
        on my Mac.
        </p>
        <p>
        As the class progressed, we got more into the basics of 
        SQL. I learned about modeling data and how to construct 
        ERD tables, subtypes and supertypes, normalization, 
        data warehouses, and more.
        </p>
        <p>
        Finally, about halfway through the semester, we were 
        introduced to a project where we had to build a whole 
        SQL database from scratch for a “gym”. One milestone 
        we had to turn in was an ERD showing foreign keys, 
        entities, and joins. We also had to show all of our 
        data we were going to input, and weekly updates to 
        the professor to let her how we were doing. After many 
        long weeks, we finally had a finished product my 
        teammate’s and I were very proud of. It had about 
        25 tables with tons of data about made up customers,
         room numbers, what the rooms were used for, instructors, 
         staff, and a lot more. My team and I worked very hard on that 
         database, and that project taught me a lot about 
         becoming a leader and more about working in a 
         professional setting.
        </p>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
