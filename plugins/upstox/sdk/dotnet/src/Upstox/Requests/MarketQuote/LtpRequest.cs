namespace Upstox.Requests.MarketQuote;

/// <summary>
/// The inputs of the Ltp operation.
/// </summary>
public sealed record LtpRequest
{
    /// <summary>
    /// Comma separated list of symbols
    /// </summary>
    public string? Symbol { get; init; }

    /// <summary>
    /// Comma separated list of instrument keys
    /// </summary>
    public string? InstrumentKey { get; init; }
}
