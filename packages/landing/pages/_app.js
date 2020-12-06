import React, { Fragment } from 'react';
import { Modal } from '@redq/reuse-modal';
import '@redq/reuse-modal/es/index.css';
import 'rc-tabs/assets/index.css';

export default ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Modal />
      <Component {...pageProps} />
    </Fragment>
  );
};
