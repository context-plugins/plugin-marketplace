namespace ApiVerve.Requests.Finance;

/// <summary>
/// The inputs of the Insidertrading operation.
/// </summary>
public sealed record InsidertradingRequest
{
    /// <summary>
    /// Stock ticker symbol (e.g. AAPL, MSFT, ADBE)
    /// </summary>
    public required string Ticker { get; init; }

    /// <summary>
    /// Filter to open-market buys or sells (buy or sell).
    /// </summary>
    public string? Type { get; init; }

    /// <summary>
    /// Number of transactions to return (1-25). Defaults to 5.
    /// </summary>
    public int? Limit { get; init; }
}
