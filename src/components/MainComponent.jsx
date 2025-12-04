import styles from "./mainComponent.module.css";

export default function MainComponent(props) {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={props.img.src} alt={props.img.alt} />
      </div>

      <div className={styles.secondContainer}>
        <h1 className={styles.title}>
          <strong>{props.title}</strong>
        </h1>
        <p className={styles.para}>
          <i>{props.paragraph}</i>
          
        </p>
        <hr />
      </div>
    </div>
  );
}
