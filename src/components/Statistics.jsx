import css from './styles/Statistics.module.css';
import PropTypes from 'prop-types';

export function Statistics(props) {
    const {stats} = props;
  return (
    
    <section className={css.statistics}>
        <h2 className={css.title}>Upload stats</h2>
      <ul className={css.statList}>
        {stats.map(({id, label, percentage}) => (
          <li className={css.item} key={id}
          style={{backgroundColor: getRandomHexColor()}}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};