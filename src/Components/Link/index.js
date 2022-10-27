import styles from "./styles.module.css";
import { Button } from "../../Components";

const Link = () => {
  return (
    <div className={styles.links}>
      <Button
        text="Twitter Link"
        address="https://twitter.com/EbubePrisca"
        id="twitter__name"
      />
      <Button
        text="Zuri Team"
        address="https://training.zuri.team/"
        id="btn__zuri"
      />
      <Button
        text="Zuri Books"
        address="http://books.zuri.team/"
        id="books"
        titleText="This is where I find Books For Design and Coding."
      />
      <Button
        text="Python Books"
        address="https://books.zuri.team/python-for-beginners?ref_id=Prisca_Onwudebelu"
        id="book__python"
      />
      <Button
        text="Background Check for Coders"
        address=" https://background.zuri.team"
        id="pitch"
      />
      <Button
        text="Design Books"
        address="https://books.zuri.team/design-rules"
        id="book__design"
      />
    </div>
  );
};

export { Link };
