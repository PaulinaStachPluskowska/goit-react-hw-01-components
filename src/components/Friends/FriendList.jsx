import PropTypes from 'prop-types';
import { FriendListItem } from './FriendItem';
import css from './Friends.module.css';

export const FriendList = ({ friends }) => {
    return (
      <ul className={css['friend-list']}>
        {friends.map(friend => (
          <FriendListItem key={friend.id} friend={friend} />
        ))}
      </ul>
    );
  };
  
  FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
  };