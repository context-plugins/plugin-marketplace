using System.ComponentModel.DataAnnotations;

namespace Upstox.Requests.MarketQuote;

/// <summary>
/// The inputs of the GetMarketQuoteOhlc operation.
/// </summary>
public sealed record GetMarketQuoteOhlcRequest
{
    /// <summary>
    /// Interval to get ohlc data
    /// </summary>
    [MinLength(1)]
    [RegularExpression("^(1d|I1|I30)$")]
    public required string Interval { get; init; }

    /// <summary>
    /// Comma separated list of symbols
    /// </summary>
    public string? Symbol { get; init; }

    /// <summary>
    /// Comma separated list of instrument keys
    /// </summary>
    public string? InstrumentKey { get; init; }
}
