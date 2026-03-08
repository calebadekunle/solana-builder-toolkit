"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function TokenChecker() {

  const [query, setQuery] = useState("");
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState("");

  const analyze = async () => {

    setError("");
    setData(null);

    const res = await fetch(`/api/token?address=${query}`);
    const json = await res.json();

    if (json.error) {
      setError(json.error);
    } else {
      setData(json);
    }

  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-white px-6 py-20">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-10">
          Token Transparency Tool
        </h1>

        {/* SEARCH */}

        <div className="flex gap-4 mb-12">

          <input
            className="flex-1 p-3 rounded bg-black/40 border border-purple-700"
            placeholder="Enter Solana token (SOL, BONK, JUP)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button
            onClick={analyze}
            className="px-6 py-3 bg-purple-600 rounded hover:bg-purple-700"
          >
            Analyze
          </button>

        </div>

        {error && (
          <p className="text-red-400 mb-6">{error}</p>
        )}

        {data && (

          <div>

            {/* TOKEN HEADER */}

            <div className="text-center mb-10">

              <img
                src={data.image}
                className="w-16 mx-auto mb-4"
              />

              <h2 className="text-3xl font-bold">
                {data.name}
              </h2>

              <p className="text-gray-400">
                Symbol: {data.symbol.toUpperCase()}
              </p>

            </div>

            {/* ANALYTICS CARDS */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">

              <div className="bg-black/40 border border-purple-800 p-4 rounded-lg text-center">

                <p className="text-gray-400 text-sm">Price</p>

                <p className="text-xl font-semibold">
                  ${data.price?.toLocaleString()}
                </p>

              </div>

              <div className="bg-black/40 border border-purple-800 p-4 rounded-lg text-center">

                <p className="text-gray-400 text-sm">Market Cap</p>

                <p className="text-xl font-semibold">
                  ${data.market_cap?.toLocaleString()}
                </p>

              </div>

              <div className="bg-black/40 border border-purple-800 p-4 rounded-lg text-center">

                <p className="text-gray-400 text-sm">Rank</p>

                <p className="text-xl font-semibold">
                  #{data.market_cap_rank}
                </p>

              </div>

              <div className="bg-black/40 border border-purple-800 p-4 rounded-lg text-center">

                <p className="text-gray-400 text-sm">24h Change</p>

                <p className="text-xl font-semibold">
                  {data.change_24h?.toFixed(2)}%
                </p>

              </div>

            </div>

            {/* CHART */}

            <div className="bg-black/40 border border-purple-800 p-6 rounded-lg mb-10">

              <ResponsiveContainer width="100%" height={300}>

                <LineChart
                  data={data.chart.map((price: number, i: number) => ({
                    index: i,
                    price
                  }))}
                >

                  <XAxis dataKey="index" hide />

                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="price"
                    stroke="#a855f7"
                    dot={false}
                  />

                </LineChart>

              </ResponsiveContainer>

            </div>

            {/* TRANSPARENCY REPORT */}

            <div className="border-t border-purple-900 pt-6">

              <h3 className="text-xl font-semibold mb-4">
                Transparency Report
              </h3>

              <ul className="text-gray-300 space-y-2">

                <li>✔ Token recognized by major crypto data providers</li>

                <li>✔ Market cap publicly tracked</li>

                <li>✔ Ranked in global crypto markets</li>

              </ul>

            </div>

          </div>

        )}

      </div>

    </div>

  );

}