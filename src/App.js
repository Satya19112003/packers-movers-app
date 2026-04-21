import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import MoveCard from "./components/MoveCard";
import { getMoves } from "./services/api";
import "./App.css";

function App() {
  const [moves, setMoves] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchMoves = async () => {
    try {
      const data = await getMoves();
      setMoves(data?.Customer_Estimate_Flow || []);
    } catch (err) {
      setError("Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMoves();
  }, []);

  return (
    <div className="container">
      <Sidebar />

      <div className="content">
        <h2>My Moves</h2>

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {!loading && moves.length === 0 && <p>No moves found</p>}

        {moves.map((move, index) => (
          <MoveCard key={move.estimate_id || index} move={move} />
        ))}
      </div>
    </div>
  );
}

export default App;