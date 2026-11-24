namespace ApiVerve.Requests.Finance;

/// <summary>
/// The inputs of the Earnings operation.
/// </summary>
public sealed record EarningsRequest
{
    /// <summary>
    /// Stock ticker symbol (e.g. AAPL, MSFT, ADBE)
    /// </summary>
    public required string Ticker { get; init; }

    /// <summary>
    /// Fiscal year to retrieve. Defaults to latest available.
    /// </summary>
    public int? Year { get; init; }

    /// <summary>
    /// Fiscal quarter to retrieve. Defaults to latest available.
    /// </summary>
    public int? Quarter { get; init; }
}
