import React from 'react';
import style from '../Statistics/statistics.module.css';
import PropTypes from 'prop-types';
import { getRandomColor } from './randomcolor';

export const Statistics = ({ title, stats }) => {
  const el = stats.map(({ id, label, percentage }) => {
    return (
      <li
        className={style.item}
        key={id}
        style={{ backgroundColor: getRandomColor() }}
      >
        <span className={style.label}>{label}</span>
        <span className={style.percentage}>{percentage} %</span>
      </li>
    );
  });

  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}

      <ul className={style.list}>{el}</ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistics;
