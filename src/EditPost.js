import React from 'react';
import { useParams } from 'react-router-dom';

const Editpost = () => {
  const { usman } = useParams();
  return <div>{JSON.stringify(usman)}</div>;
};

export default Editpost;
