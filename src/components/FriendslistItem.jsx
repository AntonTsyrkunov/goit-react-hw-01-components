import { FriendsItem } from "./styles/FriendList.styled";
import PropTypes from 'prop-types';

function FriendslistItem({avatar, name, isOnline}) {
  return(
    <FriendsItem>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendsItem>
  );
}

export default FriendslistItem;

FriendslistItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}