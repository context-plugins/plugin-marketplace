namespace ApiVerve.Requests.Finance;

/// <summary>
/// The inputs of the Dividends operation.
/// </summary>
public sealed record DividendsRequest
{
    /// <summary>
    /// Stock ticker symbol (e.g. AAPL, MSFT, KO)
    /// </summary>
    public required string Ticker { get; init; }

    /// <summary>
    /// Which series to return in the history list: quarterly (default) or annual.
    /// </summary>
    public string? Period { get; init; }

    /// <summary>
    /// Number of periods to return in the history list (1-25). Defaults to 5.
    /// </summary>
    public int? Limit { get; init; }
}
