import styles from "./secondComponent.module.css";

export default function SecondComponent() {
  return (
    <div className={styles.maindiv}>
      <h1>Universe</h1>
      <h2>Galaxy</h2>
      <h3>Solar System</h3>
      <h4>Planet</h4>
      <h5>Country</h5>
      <h6>City</h6>
      <ul>
        <li className={styles.span}>
          typeof(obj) : returns the type of the <span>object</span>
        </li>
        <li>
          string.slice(0,1) : returns the first element of the string ( as
          python )
        </li>
        <li>
          * word.toUpperCase() : turns every single
          <br />
          character to uppercase
        </li>
      </ul>
      <hr />
      <div>
        <a className={styles.a} href="https://www.google.com">
          Google
        </a>
        <a className={styles.a} href="https://www.google.com">
          Google
        </a>
        <a className={styles.a} href="https://www.google.com">
          Google
        </a>
        <a className={styles.a} href="https://www.google.com">
          Google
        </a>
        <a className={styles.a} href="https://www.google.com">
          Google
        </a>
        <a className={styles.a} href="https://www.google.com">
          Google
        </a>
        <a className={styles.a} href="https://www.google.com">
          Google
        </a>
        <a className={styles.a} href="https://www.google.com">
          Google
        </a>
      </div>


      <hr />
    </div>
  );
}
