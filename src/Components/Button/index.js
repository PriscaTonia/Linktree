import styles from "./styles.module.css";

const Button = ({ text, address, idName }) => {
  return (
    <a href={address} className={styles.btn} id={idName}>
      {text}
    </a>
  );
};

export { Button };
