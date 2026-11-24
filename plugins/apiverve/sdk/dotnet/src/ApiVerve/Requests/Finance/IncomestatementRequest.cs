namespace ApiVerve.Requests.Finance;

/// <summary>
/// The inputs of the Incomestatement operation.
/// </summary>
public sealed record IncomestatementRequest
{
    /// <summary>
    /// Stock ticker symbol (e.g. AAPL, MSFT, ADBE)
    /// </summary>
    public required string Ticker { get; init; }

    /// <summary>
    /// Fiscal year to retrieve. Defaults to latest available. History covers only the quarters captured so far; a missing period answers 404 listing the available ones.
    /// </summary>
    public int? Year { get; init; }

    /// <summary>
    /// Fiscal quarter to retrieve. Defaults to latest available.
    /// </summary>
    public int? Quarter { get; init; }
}
