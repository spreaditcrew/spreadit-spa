import React from 'react';
import { RouterProps, withRouter } from 'next/router';
import styles from '../index.scss';

export interface IpsumParameters {
  router: RouterProps<{
    id: number;
  }>;
}

function IpsumComponent(props: IpsumParameters): JSX.Element {
  const {
    router: { query },
  } = props;

  if (!query || !query.id) {
    return <div className={styles.block}>No ID, sorry :(</div>;
  }

  return <div className={styles.block}>Yes, it works! {query.id ? query.id : ''}</div>;
}

export default withRouter(IpsumComponent);
