namespace ApiVerve.Requests.Finance;

/// <summary>
/// The inputs of the Secfilings operation.
/// </summary>
public sealed record SecfilingsRequest
{
    /// <summary>
    /// Stock ticker symbol (e.g. AAPL, MSFT, ADBE)
    /// </summary>
    public required string Ticker { get; init; }

    /// <summary>
    /// Filter to a single form type (e.g. 10-K, 10-Q, 8-K, 4).
    /// </summary>
    public string? Form { get; init; }

    /// <summary>
    /// Number of filings to return (1-50). Defaults to 5.
    /// </summary>
    public int? Limit { get; init; }
}
