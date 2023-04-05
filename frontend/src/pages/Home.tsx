import React from 'react';
import '../styles.css';

export default function Home() {
  return (
    <React.Fragment>
      <div className="row">
        <div className="align-self-center">
          <h1>Joels Movie Collection</h1>
        </div>

        <div className="align-self-center">
          <img src="./JoelHiltonHeadshot.jpg" />
        </div>
      </div>
      <div className="container">
        <div className="align-self-center">
          <p>
            This is a website for Joel Hilton's movie collection. This website
            gives you the opportunity to browse all the movies that he has in
            his collection. Also included is a link to Joel's podcast.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
