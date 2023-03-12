 import PropTypes from 'prop-types';
 import css from './Friends.module.css';

  export const FriendListItem = ({ friend }) => {
    return (
      <li className={css.item}>
        <span className={friend.isOnline ? css.online : css.offline}></span>
        <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
        <p className={css.name}>{friend.name}</p>
      </li>
    );
  };
  
  FriendListItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }),
};
  