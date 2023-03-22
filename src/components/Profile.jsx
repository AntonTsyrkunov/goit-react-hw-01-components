import css from './styles/Profile.module.css';
import PropTypes from 'prop-types';

export function Profile({username, tag, avatar, location, stats}) {
  const userStats = [{label: 'Followers', quantity: stats.followers}, {label: 'Views', quantity: stats.views}, {label: 'Likes', quantity: stats.likes}]
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={avatar}
          alt="User avatar"
          className={css.avatar}
        />
        <div className={css.iformation}>            
          <p className={css.name}>{username}</p>
          <p className={css.tag}>@{tag}</p>
          <p className={css.location}>{location}</p>
        </div>
      </div>

      <ul className={css.stats}>
        {userStats.map(({label, quantity}) => <li key={label} className={css.statList}>
          <span className={css.label}>{label}</span>
          <span className={css.quantity}>{quantity}</span>
        </li>)}
        
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};