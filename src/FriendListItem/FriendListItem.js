import styles from "./FriendListItem.module.scss";
import PropTypes from "prop-types";

const Friend = ({ friend }) => {
  const isActive = friend.isOnline;
  return (
    <li className={styles.Item}>
      {<span className={isActive ? styles.OnLine : styles.OffLine} />}
      <img
        className={styles.Avatar}
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className={styles.Name}>{friend.name}</p>
    </li>
  );
};

Friend.defaultProps = {
  friend: {},
};

Friend.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  }),
};
export default Friend;
