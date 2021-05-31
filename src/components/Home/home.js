import React from 'react';
import './home.css'

function Home (){
    return (
        <section className="home" id="home">
        <div className="container">
          <div className="row full-screen">
            <div className="home-content">
              <div className="block">
                <h6>Hi, my name is</h6>
                <h1>Fidel Bello</h1>
                <h3>Starting Web Developer</h3>
                <div className="resumeDownload">
                  <a href="#">Download Resume</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Home;