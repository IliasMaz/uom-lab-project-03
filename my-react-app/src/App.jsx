import Header from "./components/Header";
import MainComponent from "./components/MainComponent";
import SecondComponent from "./components/SecondComponent.jsx";
import Footer from "./components/Footer.jsx";
import data from "./components/data.js";

import { Routes, Route } from "react-router-dom";
import SecondPage from "./components/SecondPage.jsx";

export default function App() {
  const dataM = data.map((entry) => (
    <MainComponent key={entry.id} {...entry} />
  ));

  return (
    <div
      style={{
        minHeight: "100vh",

        
      }}
    >
      <Header />

      <Routes>

        <Route
          path="/"
          element={
            <>
              {dataM}
              <hr />
              <SecondComponent />
            </>
          }
        />

        <Route
          path="/second-page"
          element={
            <div style={{ padding: "2rem" }}>
              <SecondPage />
            </div>
          }
        />

        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>

      <Footer />
    </div>
  );
}
