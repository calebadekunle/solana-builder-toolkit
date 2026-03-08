"use client";

import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-white px-6 py-20">

      {/* HERO SECTION */}

      <div className="max-w-5xl mx-auto text-center mb-20">

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent mb-6">
          Solana Builder Toolkit
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          A toolkit of transparency, analytics, and developer tools designed to help
          builders and communities launch and manage tokens responsibly on{" "}
          <span className="text-purple-400 font-semibold">Solana</span>.
        </p>

      </div>

      {/* TOOL GRID */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        {/* TOKEN TRANSPARENCY */}

        <Link href="/token-checker">

          <div className="group cursor-pointer rounded-xl border border-purple-700 bg-black/40 backdrop-blur-md p-8 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-900/40 transition">

            <div className="flex items-center justify-between mb-4">

              <h2 className="text-2xl font-semibold">
                Token Transparency
              </h2>

              <span className="text-xs px-3 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/40">
                LIVE
              </span>

            </div>

            <p className="text-gray-400">
              Analyze Solana ecosystem tokens and verify transparency signals such as
              market cap, price trends, rankings, and token health indicators.
            </p>

          </div>

        </Link>

        {/* DAO TOOL */}

        <div className="rounded-xl border border-purple-800 bg-black/30 p-8 opacity-80">

          <h2 className="text-2xl font-semibold mb-4">
            DAO Voting Tool
          </h2>

          <p className="text-gray-400 mb-3">
            Create proposals and vote using SPL tokens.
          </p>

          <span className="text-sm text-purple-400">
            Coming Soon
          </span>

        </div>

        {/* DEV STARTER */}

        <div className="rounded-xl border border-purple-800 bg-black/30 p-8 opacity-80">

          <h2 className="text-2xl font-semibold mb-4">
            Developer Starter Kit
          </h2>

          <p className="text-gray-400 mb-3">
            Bootstrap Solana dApps quickly with templates and developer utilities.
          </p>

          <span className="text-sm text-purple-400">
            Coming Soon
          </span>

        </div>

        {/* TOKEN SAFETY */}

        <div className="rounded-xl border border-purple-800 bg-black/30 p-8 opacity-80">

          <h2 className="text-2xl font-semibold mb-4">
            Token Launch Safety
          </h2>

          <p className="text-gray-400 mb-3">
            Checklist and safety signals for responsible token launches.
          </p>

          <span className="text-sm text-purple-400">
            Coming Soon
          </span>

        </div>

      </div>

    </div>
  );
}