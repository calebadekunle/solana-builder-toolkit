"use client";

import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-white px-6 py-16">

      {/* HEADER */}

      <div className="text-center max-w-3xl mx-auto mb-16">

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Solana Builder Toolkit
        </h1>

        <p className="text-gray-400 text-lg">
          Essential tools for developers and communities building on Solana
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
              Analyze Solana tokens and verify key market data.
            </p>

          </div>

        </Link>

        {/* DAO TOOL */}

        <div className="rounded-xl border border-purple-800 bg-black/30 p-8 opacity-80">

          <h2 className="text-2xl font-semibold mb-4">
            DAO Voting Tool
          </h2>

          <p className="text-gray-400 mb-3">
            Create proposals and vote with SPL tokens.
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
            Bootstrap Solana dApps quickly with templates.
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
            Checklist for responsible token launches.
          </p>

          <span className="text-sm text-purple-400">
            Coming Soon
          </span>

        </div>

      </div>

    </div>
  );
}