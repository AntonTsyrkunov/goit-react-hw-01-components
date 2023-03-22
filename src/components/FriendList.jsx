import FriendslistItem from "./FriendslistItem";
import { ListOfFriends } from "./styles/FriendList.styled";
import PropTypes from 'prop-types';

export function FriendList({friends}) {
  return (
    <ListOfFriends>
      {
        friends.map((friend) => 
        <FriendslistItem
        key={friend.id}
        {...friend}/>)
      }
    </ListOfFriends>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};