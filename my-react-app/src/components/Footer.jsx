import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "2rem",
        padding: "1rem",

        color: "white",
      }}
    >
      <nav>
        <ul style={{ listStyle: "none", display: "flex", gap: "1rem" }}>
          <li>
            <Link to="/" style={{ color: "cyan" }}>
              Main Page
            </Link>
          </li>
          <li>
            <Link to="/second-page" style={{ color: "cyan" }}>
              Second Page
            </Link>
          </li>
        </ul>
      </nav>
      <p>
        {" "}
        © Ilias Mazarakis - ESSD - 2025.{" "}
        <a
          href="https://www.linkedin.com/in/ilias-mazarakis-b495242b6/"
          style={{ color: "cyan" }}
        >
          my Profile
        </a>
      </p>

    </footer>
  );
}
