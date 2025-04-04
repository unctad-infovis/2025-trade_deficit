// TradeDeficitInfographic.jsx
import React, {
  useState, useRef, useEffect
} from 'react';
import '../styles/styles.less';

// https://www.npmjs.com/package/react-is-visible
import 'intersection-observer';
import { useIsVisible } from 'react-is-visible';

import TradeDeficitInfographic from './TradeDeficitInfographic.jsx';

function App() {
  const chartRef = useRef(null);
  const [opacity, setOpacity] = useState(0);
  const isVisible = useIsVisible(chartRef, { once: true });
  useEffect(() => {
    if (isVisible === true) {
      setTimeout(() => {
        setOpacity(1);
      }, 300);
    }
  }, [isVisible]);
  return (
    <div className="app" style={{ opacity }} ref={chartRef}>
      <div className="title_container">
        <h3>“Collateral damage”: 95% of US trading partners contribute little to the deficit</h3>
        <h4>The United States trade deficit with selected trading partners</h4>
      </div>
      <TradeDeficitInfographic />
      <div className="source">
        <em>Source:</em>
        {' '}
        UN Trade and Development (UNCTAD) calculations based on United States national statistics.
      </div>
      <div className="note">
        <em>Note:</em>
        {' '}
        Trading partners include countries, regions, territories. European Union is counted as one. The United States trade deficit is computed only on the trade of goods, services are excluded.
      </div>
    </div>
  );
}

export default App;
