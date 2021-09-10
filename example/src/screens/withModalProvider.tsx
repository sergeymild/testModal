import React, { FC } from 'react';

const withModalProvider = (Component: FC) => () => {
  return <Component />;
};

export default withModalProvider;
