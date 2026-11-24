namespace Upstox.Requests.MarketQuoteV3;

/// <summary>
/// The inputs of the GetMarketQuoteOptionGreek operation.
/// </summary>
public sealed record GetMarketQuoteOptionGreekRequest
{
    /// <summary>
    /// Comma separated list of instrument keys
    /// </summary>
    public string? InstrumentKey { get; init; }
}
