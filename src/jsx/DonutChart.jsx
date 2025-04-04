import React from 'react';
import PropTypes from 'prop-types';

function DonutChart({
  big,
  color,
  label,
  percent
}) {
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const dash = (percent / 100) * circumference;

  return (
    <div className="chart-container">
      <svg viewBox="0 0 40 40">
        <circle
          cx="20"
          cy="20"
          r={radius}
          fill="none"
          stroke="rgba(255, 203, 5, 0.3)"
          strokeWidth="4"
        />
        <circle
          cx="20"
          cy="20"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeDasharray={`${dash} ${circumference - dash}`}
          strokeLinecap="round"
          transform="rotate(-90 20 20)"
          style={{ transition: 'stroke-dasharray 1s ease' }}
        />
        <text x="20" y="22" textAnchor="middle">
          {big === true ? (
            <tspan className="bigger">
              {percent}
              %
            </tspan>
          ) : (
            <tspan className="">
              {percent}
              %
            </tspan>
          )}

        </text>
      </svg>
      <div className="label">{label}</div>
    </div>
  );
}

DonutChart.propTypes = {
  big: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
};

export default DonutChart;
