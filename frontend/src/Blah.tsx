import React from 'react';
import styles from './Blah.module.css';

function TopBanner() {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-2">
          <img src="./JoelHiltonHeadshot.jpg" />
        </div>

        <div className="col align-self-center text-start">
          <h1 className={styles.h1}>Joels Movie Collection</h1>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TopBanner;
