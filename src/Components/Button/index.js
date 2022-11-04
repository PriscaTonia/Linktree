import styles from "./styles.module.css";
import { Link } from 'react-router-dom'

const Button = ({ text = "", address = "", id = "", titleText = " " }) => {
  return (
    <Link to ={address} className ={styles.btn} id ={id} title= {titleText}>
      {text}
    </Link>
  );
};

export { Button };
