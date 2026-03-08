export async function GET(req: Request) {

  const { searchParams } = new URL(req.url);
  const query = searchParams.get("address");

  if (!query) {
    return Response.json({ error: "No token provided" });
  }

  try {

    // Search for token
    const search = await fetch(
      `https://api.coingecko.com/api/v3/search?query=${query}`
    );

    const searchData = await search.json();

    if (!searchData.coins || searchData.coins.length === 0) {
      return Response.json({ error: "Token not found" });
    }

    const coin = searchData.coins[0];

    // Get full coin details WITH sparkline data
    const details = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coin.id}?sparkline=true`
    );

    const coinData = await details.json();

    return Response.json({
      name: coinData.name,
      symbol: coinData.symbol,
      image: coinData.image?.large,
      price: coinData.market_data?.current_price?.usd,
      market_cap: coinData.market_data?.market_cap?.usd,
      market_cap_rank: coinData.market_cap_rank,
      chart: coinData.market_data?.sparkline_7d?.price || []
    });

  } catch (error) {

    return Response.json({ error: "API request failed" });

  }

}