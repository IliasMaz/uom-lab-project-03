import styles from "./header.module.css";
import globalSvg from "../assets/Global SVG Icons (1).svg";

export default function Header() {
  return (
    <div className={styles.container}>
      <header className={styles.divHeader}>
        <img className={styles.imgHeader} src={globalSvg} alt="earth" />
        <h1>Mazarakis Ilias Content</h1>
      </header>
    </div>
  );
}
          
