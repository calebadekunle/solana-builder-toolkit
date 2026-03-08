export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-white p-10">

      <h1 className="text-4xl font-bold mb-8 text-center">
        Solana Builder Toolkit
      </h1>

      <p className="text-center text-gray-300 mb-12">
        Essential tools for developers and communities building on Solana
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        <a href="/token-checker">
          <div className="bg-purple-900/40 border border-purple-700 rounded-xl p-8 hover:bg-purple-800 transition cursor-pointer">

            <h2 className="text-2xl font-semibold mb-2">
              Token Transparency
            </h2>

            <p className="text-gray-300">
              Analyze Solana tokens and verify key market data.
            </p>

          </div>
        </a>

        <div className="bg-black/40 border border-gray-700 rounded-xl p-8 opacity-80">
          <h2 className="text-2xl font-semibold mb-2">
            DAO Voting Tool
          </h2>

          <p className="text-gray-400">
            Create proposals and vote with SPL tokens.
          </p>

          <p className="text-sm mt-2 text-purple-400">
            Coming Soon
          </p>
        </div>

        <div className="bg-black/40 border border-gray-700 rounded-xl p-8 opacity-80">
          <h2 className="text-2xl font-semibold mb-2">
            Developer Starter Kit
          </h2>

          <p className="text-gray-400">
            Bootstrap Solana dApps quickly with templates.
          </p>

          <p className="text-sm mt-2 text-purple-400">
            Coming Soon
          </p>
        </div>

        <div className="bg-black/40 border border-gray-700 rounded-xl p-8 opacity-80">
          <h2 className="text-2xl font-semibold mb-2">
            Token Launch Safety
          </h2>

          <p className="text-gray-400">
            Checklist for responsible token launches.
          </p>

          <p className="text-sm mt-2 text-purple-400">
            Coming Soon
          </p>
        </div>

      </div>

    </div>
  );
}