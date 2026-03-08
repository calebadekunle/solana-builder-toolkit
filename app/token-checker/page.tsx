"use client";

import { useState } from "react";

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);

export default function TokenChecker() {

  const [query, setQuery] = useState("");
  const [result, setResult] = useState<any>(null);

  const checkToken = async () => {

    const res = await fetch(`/api/token?address=${query}`);

    const data = await res.json();

    setResult(data);

  };

  // Chart Data
  const chartData =
    result?.chart && result.chart.length > 0
      ? {
          labels: result.chart.map((_: any, i: number) => i),
          datasets: [
            {
              data: result.chart,
              borderColor: "#a855f7",
              backgroundColor: "rgba(168,85,247,0.2)",
              borderWidth: 2,
              pointRadius: 0,
              tension: 0.3
            }
          ]
        }
      : null;

  // Token Health Indicator
  let healthScore: number | null = null;
  let healthLabel = "";

  if (result && !result.error) {

    const rank = result.market_cap_rank || 1000;

    if (rank <= 10) {
      healthScore = 95;
      healthLabel = "Very Strong Market Presence";
    }
    else if (rank <= 100) {
      healthScore = 80;
      healthLabel = "Healthy Market Activity";
    }
    else if (rank <= 300) {
      healthScore = 60;
      healthLabel = "Moderate Market Presence";
    }
    else {
      healthScore = 40;
      healthLabel = "Low Market Visibility";
    }

  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-white p-10">

      <h1 className="text-4xl font-bold mb-8 text-center">
        Token Transparency Tool
      </h1>

      <div className="flex justify-center">

        <input
          placeholder="Search Solana token (SOL, BONK, JUP)"
          value={query}
          onChange={(e)=>setQuery(e.target.value)}
          className="p-3 w-96 rounded-l-lg bg-black border border-purple-600"
        />

        <button
          onClick={checkToken}
          className="bg-purple-600 px-6 rounded-r-lg hover:bg-purple-700"
        >
          Analyze
        </button>

      </div>

      {result && !result.error && (
        <div className="mt-12 max-w-xl mx-auto bg-black/50 border border-purple-700 rounded-xl p-6 text-center">

          <img
            src={result.image}
            alt="token"
            className="w-20 h-20 mx-auto mb-4"
          />

          <h2 className="text-2xl font-bold mb-2">
            {result.name}
          </h2>

          <p className="text-gray-400 mb-2">
            Symbol: {result.symbol?.toUpperCase()}
          </p>

          <p className="mb-2">
            Price: ${result.price?.toLocaleString()}
          </p>

          <p className="mb-2">
            Market Cap: ${result.market_cap?.toLocaleString()}
          </p>

          <p className="text-gray-400">
            Market Cap Rank: #{result.market_cap_rank}
          </p>

          {/* PRICE CHART */}

          {chartData && (
            <div className="mt-8">
              <Line data={chartData} />
            </div>
          )}

          {/* TRANSPARENCY REPORT */}

          <div className="mt-6 border-t border-purple-700 pt-4 text-left">

            <h3 className="text-lg font-semibold mb-2">
              Transparency Report
            </h3>

            <p className="text-gray-400">
              ✔ Token recognized by major crypto data providers
            </p>

            <p className="text-gray-400">
              ✔ Market cap publicly tracked
            </p>

            <p className="text-gray-400">
              ✔ Ranked in global crypto markets
            </p>

          </div>

          {/* HEALTH INDICATOR */}

          <div className="mt-6 border-t border-purple-700 pt-4 text-left">

            <h3 className="text-lg font-semibold mb-2">
              Token Health Indicator
            </h3>

            <p className="text-gray-300">
              Score: <b>{healthScore} / 100</b>
            </p>

            <p className="text-purple-400">
              {healthLabel}
            </p>

          </div>

        </div>
      )}

      {result?.error && (
        <p className="text-red-400 text-center mt-10">
          {result.error}
        </p>
      )}

    </div>
  );
}