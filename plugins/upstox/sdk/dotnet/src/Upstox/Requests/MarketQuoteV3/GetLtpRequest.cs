namespace Upstox.Requests.MarketQuoteV3;

/// <summary>
/// The inputs of the GetLtp operation.
/// </summary>
public sealed record GetLtpRequest
{
    /// <summary>
    /// Comma separated list of instrument keys
    /// </summary>
    public string? InstrumentKey { get; init; }
}
