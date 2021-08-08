import styles from "./FriendList.module.scss";
import Friend from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => (
  <ul className={styles.FriendList}>
    {friends.map((friend) => (
      <Friend key={friend.id} user={friend} />
    ))}
  </ul>
);

FriendList.defaultProps = {
  friends: {},
};

export default FriendList;
