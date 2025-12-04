import paokSunthima from "../assets/paok.mp3";
import lacta from "../assets/lacta.mp4"

export default function SecondPage() {
  return (
    <div>
      <header>
        <h1>Second Page</h1>
      </header>
      <main>
        <h1> Sunthima Tou paok</h1>
        <audio controls>
          <source src={paokSunthima} type="audio/mpeg" /> Anavailable content,
          check ur browser
        </audio>
        <hr />
        <h4>Lacta</h4>
        <video
          width="400"
          height="auto"
          controls
          style={{ border: "2px solid white", borderRadius: "8px" }}
        >
          <source src={lacta} type="video/mp4" />
        </video>
      </main>
    </div>
  );
}
