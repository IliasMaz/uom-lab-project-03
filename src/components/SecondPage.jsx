// src/components/SecondPage.jsx
import paokSunthima from "../assets/paok.mp3";
import lactaVideo from "../assets/lacta.mp4";

export default function SecondPage() {
  return (
    <div style={{ padding: "2rem", color: "white" }}>
      <header>
        <h2>PAOK & Lacta Media</h2>
      </header>

      <main>
        {/* Audio */}
        <section style={{ marginBottom: "2rem" }}>
          <h3>PAOK Sunthima</h3>
          <audio controls>
            <source src={paokSunthima} type="audio/mpeg" />Ο browser σου δεν
            υποστηρίζει το audio tag.
          </audio>
        </section>

        {/* Video */}
        <section>
          <h3>Lacta Video</h3>
          <video
            width="900"
            height="506"
            controls
            style={{ border: "2px solid white", borderRadius: "8px" }}
          >
            <source src={lactaVideo} type="video/mp4" />Ο browser σου δεν
            υποστηρίζει το video tag.
          </video>
        </section>
      </main>
    </div>
  );
}
