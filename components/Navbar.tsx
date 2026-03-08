"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full flex justify-between items-center px-6 py-4 border-b border-purple-900 bg-black/40 backdrop-blur-md">

      {/* LOGO / TITLE */}

      <Link href="/dashboard">
        <h1 className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Solana Builder Toolkit
        </h1>
      </Link>

      {/* NAV LINKS */}

      <div className="flex gap-6 text-sm text-gray-300">

        <Link
          href="/token-checker"
          className="hover:text-white transition"
        >
          Transparency Tool
        </Link>

        <a
          href="https://github.com/calebadekunle/solana-builder-toolkit"
          target="_blank"
          className="hover:text-white transition"
        >
          GitHub
        </a>

      </div>

    </div>
  );
}