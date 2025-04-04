// TradeDeficitInfographic.jsx
import React, {

} from 'react';
import '../styles/styles.less';

import TradeDeficitInfographic from './TradeDeficitInfographic.jsx';

function App() {
  return (
    <div className="app">
      <div className="title_container">
        <h3>Imposing tariffs to all world has little affect on the overall deficit</h3>
        <h4>Trade deficit with the United States</h4>
      </div>
      <TradeDeficitInfographic />
      <div className="source">
        <em>Source:</em>
        {' '}
        UN Trade and Development (UNCTAD)
      </div>
      <div className="note">
        <em>Note:</em>
        {' '}
        Trading partners include countries, regions, territories
      </div>
    </div>
  );
}

export default App;
