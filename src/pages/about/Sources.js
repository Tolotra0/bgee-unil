import React from 'react';
import staticBuilder from '../../helpers/staticBuilder';
import json from '../../static/about/sources';

const Sources = () => (
  <div className="container mt-5">{staticBuilder(json)}</div>
);

export default Sources;
