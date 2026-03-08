"use client";

import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-white px-6 py-20">

      {/* HERO */}

      <div className="max-w-5xl mx-auto text-center mb-16">

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent mb-6">
          Solana Builder Toolkit
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          A toolkit of transparency, analytics, and developer tools designed to help
          builders and communities launch and manage tokens responsibly on{" "}
          <span className="text-purple-400 font-semibold">Solana</span>.
        </p>

      </div>

      {/* BADGES */}

      <div className="flex flex-wrap justify-center gap-4 mb-16">

        <span className="px-4 py-2 rounded-full border border-purple-600 bg-black/40 text-purple-300 text-sm">
          Open Source
        </span>

        <span className="px-4 py-2 rounded-full border border-purple-600 bg-black/40 text-purple-300 text-sm">
          Solana Ecosystem Tool
        </span>

        <span className="px-4 py-2 rounded-full border border-purple-600 bg-black/40 text-purple-300 text-sm">
          Developer Toolkit
        </span>

        <span className="px-4 py-2 rounded-full border border-purple-600 bg-black/40 text-purple-300 text-sm">
          Transparency Analytics
        </span>

      </div>

      {/* TOOLS */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">

        {/* TOKEN TOOL */}

        <Link href="/token-checker">
          <div className="cursor-pointer rounded-xl border border-purple-700 bg-black/40 p-8 hover:border-purple-400 transition">

            <div className="flex justify-between items-center mb-4">

              <h2 className="text-2xl font-semibold">
                Token Transparency
              </h2>

              <span className="text-xs px-3 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/40">
                LIVE
              </span>

            </div>

            <p className="text-gray-400">
              Analyze Solana ecosystem tokens and verify transparency signals such as market cap, rankings and price history.
            </p>

          </div>
        </Link>

        {/* DAO */}

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

        {/* STARTER */}

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

        {/* SAFETY */}

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

      {/* PROJECT LINKS */}

      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-8">
          Project Links
        </h2>

        <div className="flex flex-wrap justify-center gap-6">

          <a
            href="https://github.com/calebadekunle/solana-builder-toolkit"
            target="_blank"
            className="px-6 py-3 rounded-lg border border-purple-500 hover:bg-purple-700 transition"
          >
            View GitHub Repository
          </a>

          <a
            href="https://solana-builder-toolkit.vercel.app/token-checker"
            target="_blank"
            className="px-6 py-3 rounded-lg border border-purple-500 hover:bg-purple-700 transition"
          >
            Open Token Transparency Tool
          </a>

        </div>

      </div>

    </div>
  );
}