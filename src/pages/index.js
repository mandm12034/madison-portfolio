import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/01.jpg';
import pic2 from '../assets/images/02.jpg';
import pic3 from '../assets/images/03.jpg';
import pic4 from '../assets/images/04.jpg';
import pic5 from '../assets/images/05.jpg';
import pic6 from '../assets/images/06.jpg';

import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <header>
          <h1>
            My name is Madison, and this is my website.
            <br />
          </h1>
          <p>
            I have many years of academic experience, not only from attending Florida State
            but also Valencia College on the Osceola County campus. I have taken courses on
            business management, the Microsoft Office suite, and many other prerequisites required
            for my major, all before I graduated high school. I am currently enrolled in Big Data,
            Programming 1, and Business Intelligence. I also have some experience with SQL Server,
            and I am currently learning the basics of C++ and data science in order to further enhance
            my knowledge in this field of study.

          </p>
        </header>
        <section className="tiles">
          <article className="style1">
            <span className="image">
              <img src={pic1} alt="" />
            </span>
            <Link to="/Data">
              <h2>Data Analysis</h2>
              <div className="content">
                <p>
                  My experience in data analysis.
                </p>
              </div>
            </Link>
          </article>
          <article className="style2">
            <span className="image">
              <img src={pic2} alt="" />
            </span>
            <Link to="/SQL">
              <h2>SQL</h2>
              <div className="content">
                <p>
                  My experience in SQL.
                </p>
              </div>
            </Link>
          </article>
          <article className="style3">
            <span className="image">
              <img src={pic3} alt="" />
            </span>
            <Link to="/Management">
              <h2>Management</h2>
              <div className="content">
                <p>
                  My experience in business management.
                </p>
              </div>
            </Link>
          </article>
          <article className="style4">
            <span className="image">
              <img src={pic4} alt="" />
            </span>
            <Link to="/C">
              <h2>C++</h2>
              <div className="content">
                <p>
                  My experience in C++.
                </p>
              </div>
            </Link>
          </article>
          <article className="style5">
            <span className="image">
              <img src={pic5} alt="" />
            </span>
            <Link to="/">
              <h2>Tableau</h2>
              <div className="content">
                <p>
                  My experience in Tableau.
                </p>
              </div>
            </Link>
          </article>
          <article className="style6">
            <span className="image">
              <img src={pic6} alt="" />
            </span>
            <Link to="/Service">
              <h2>Service</h2>
              <div className="content">
                <p>
                  My experience in customer service.
                </p>
              </div>
            </Link>
          </article>
        </section>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
