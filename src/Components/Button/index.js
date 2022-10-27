import styles from "./styles.module.css";

const Button = ({ text = "", address = "", id = "", titleText = " " }) => {
  return (
    <a href={address} className={styles.btn} id={id} title={titleText}>
      {text}
    </a>
  );
};

export { Button };
