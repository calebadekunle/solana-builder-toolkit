export async function GET(req: Request) {

  const { searchParams } = new URL(req.url);
  const query = searchParams.get("address");

  if (!query) {
    return Response.json({ error: "No token provided" });
  }

  try {

    const search = await fetch(
      `https://api.coingecko.com/api/v3/search?query=${query}`
    );

    const searchData = await search.json();

    if (!searchData.coins || searchData.coins.length === 0) {
      return Response.json({ error: "Token not found" });
    }

    const coin = searchData.coins[0];

    const details = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coin.id}`
    );

    const coinData = await details.json();

    const categories = coinData.categories || [];

    const isSolanaToken =
      categories.includes("Solana Ecosystem") ||
      coinData.asset_platform_id === "solana";

    if (!isSolanaToken) {
      return Response.json({
        error: "This token is not part of the Solana ecosystem"
      });
    }

    return Response.json({
      name: coinData.name,
      symbol: coinData.symbol,
      image: coinData.image?.large,
      price: coinData.market_data?.current_price?.usd,
      market_cap: coinData.market_data?.market_cap?.usd,
      market_cap_rank: coinData.market_cap_rank
    });

  } catch {

    return Response.json({ error: "API request failed" });

  }

}