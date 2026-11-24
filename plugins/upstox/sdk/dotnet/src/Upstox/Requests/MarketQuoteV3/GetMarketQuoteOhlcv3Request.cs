using System.ComponentModel.DataAnnotations;

namespace Upstox.Requests.MarketQuoteV3;

/// <summary>
/// The inputs of the GetMarketQuoteOhlcv3 operation.
/// </summary>
public sealed record GetMarketQuoteOhlcv3Request
{
    /// <summary>
    /// Interval to get ohlc data
    /// </summary>
    [MinLength(1)]
    [RegularExpression("^(1d|I1|I30)$")]
    public required string Interval { get; init; }

    /// <summary>
    /// Comma separated list of instrument keys
    /// </summary>
    public string? InstrumentKey { get; init; }
}
