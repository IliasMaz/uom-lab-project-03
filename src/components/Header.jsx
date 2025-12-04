import styles from "./header.module.css";
import globalSvg from "../assets/Global SVG Icons (1).svg";

export default function Header() {
  return (
    <div className={styles.container}>
      <header className={styles.divHeader}>
        <img className={styles.imgHeader} src={globalSvg} alt="earth" />
        <h1>Mazarakis Ilias Content </h1>
        <h2>
          <a href="https://github.com/IliasMaz/uom-lab-project-03/tree/main?tab=readme-ov-file">Source Code</a>
        </h2>
      </header>
    </div>
  );
}
