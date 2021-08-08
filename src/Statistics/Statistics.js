import styles from "./Statistics.module.scss";

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.Statistics}>
      {title && <h2 className={styles.Title}>{title}</h2>}
      <ul className={styles.StatsList}>
        {stats.length > 0 &&
          stats.map((stat) => (
            <li className={styles.Item} key={stat.id}>
              <span className={styles.Label}>{stat.label} </span>
              <span className={styles.Percentage}>{stat.percentage}%</span>
            </li>
          ))}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: "",
  stats: {},
};

export default Statistics;
