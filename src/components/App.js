import React from 'react';
import '../css/index.css'

import PeriodColumn from './PeriodColumn'

let data = require("../data/periodo-data");

function App() {
  return ([
    <PeriodColumn/>,
    <PeriodColumn/>
  ]);
}

export default App;
