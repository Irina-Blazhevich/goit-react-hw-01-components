import styles from "./Profile.module.scss";

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className={styles.Profile}>
    <div className={styles.Description}>
      <img src={avatar} alt="Аватар пользователя" className={styles.Avatar} />
      <p className={styles.Name}>{name}</p>
      <p className={styles.Tag}>@{tag}</p>
      <p className={styles.Location}>{location}</p>
    </div>

    <ul className={styles.Stats}>
      <li className={styles.StatsItem}>
        <span className="label">Followers </span>
        <span className="quantity">{stats.followers}</span>
      </li>
      <li className={styles.StatsItem}>
        <span className="label">Views </span>
        <span className="quantity">{stats.views}</span>
      </li>
      <li className={styles.StatsItem}>
        <span className="label">Likes </span>
        <span className="quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>
);
export default Profile;
