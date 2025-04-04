import React, { useEffect, useState } from 'react';
import DonutChart from './DonutChart.jsx';
import MiddleArrow from './MiddleArrow.jsx';

function TradeDeficitComparison() {
  const [percent1, setPercent1] = useState(0);
  const [percent2, setPercent2] = useState(0);

  useEffect(() => {
    const animateValue = (setFn, target, step = 0.2, delay = 16) => {
      let current = 0;
      const interval = setInterval(() => {
        current += step;
        if (current >= target) {
          setFn(target);
          clearInterval(interval);
        } else {
          setFn(parseFloat(current.toFixed(1)));
        }
      }, delay);
    };

    animateValue(setPercent1, 12, 1, 16); // ~60fps
    animateValue(setPercent2, 88, 1, 16);
  }, []);

  return (
    <div className="wrapper">
      <div className="infographic">
        <div className="comparison-row">
          <div className="countries">
            <div className="number">10</div>
            <div className="label">Trading partners</div>
          </div>
          <MiddleArrow />
          <DonutChart
            big
            color="#009edb"
            label="Of Trade Deficit"
            percent={percent2}
          />
        </div>
        <div className="comparison-row">
          <div className="countries">
            <div className="number bigger">187</div>
            <div className="label">Trading partners</div>
          </div>
          <MiddleArrow />
          <DonutChart
            big={false}
            color="#009edb"
            label="Of Trade Deficit"
            percent={percent1}
          />
        </div>
      </div>
    </div>
  );
}

export default TradeDeficitComparison;
