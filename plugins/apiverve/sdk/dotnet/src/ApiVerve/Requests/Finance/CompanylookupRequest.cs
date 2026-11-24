namespace ApiVerve.Requests.Finance;

/// <summary>
/// The inputs of the Companylookup operation.
/// </summary>
public sealed record CompanylookupRequest
{
    /// <summary>
    /// Stock ticker symbol (e.g. AAPL, MSFT, GOOGL)
    /// </summary>
    public required string Ticker { get; init; }
}
