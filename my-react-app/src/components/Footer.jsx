
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "2rem",
        padding: "1rem",
        background: "#111",
        color: "white",
      }}
    >
      <nav style={{ marginBottom: "0.5rem" }}>
        <Link to="/" style={{ color: "cyan", marginRight: "1rem" }}>
          Main Page
        </Link>
        <Link to="/second-page" style={{ color: "cyan" }}>
          Second Page
        </Link>
      </nav>

      <p>
        © Ilias Mazarakis - ESSD - 2025.{" "}
        <a
          href = "https://www.linkedin.com/in/ilias-mazarakis-b495242b6/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "cyan" }}
        >
          my Profile
        </a>
      </p>
    </footer>
  );
}
