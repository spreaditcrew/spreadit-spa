import React from 'react';
import Head from 'next-server/head';
import { Link } from '../config/routes';

import styles from './index.scss';
import picture from '../static/duck.jpeg';

function Home(): JSX.Element {
  return (
    <div className={styles.block}>
      <Head>
        <title>Ducks</title>
      </Head>
      <h1 className={styles.block__title}>Ducks are awesome!</h1>
      <p>
        <Link route="loremIpsum">
          <a>First Link</a>
        </Link>{' '}
        <Link route="loremIpsumWithId" params={{ id: 3 }}>
          <a>Second link</a>
        </Link>
      </p>
      <img src={picture} alt="duck" width={300} />
    </div>
  );
}

export default Home;
