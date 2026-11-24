using FinancialModelingPrep.Models.Enums;

namespace FinancialModelingPrep.Requests.BalanceSheetStatement;

/// <summary>
/// The inputs of the GetBalanceSheet operation.
/// </summary>
public sealed record GetBalanceSheetRequest
{
    /// <summary>
    /// Ticker symbol (e.g., AAPL, MSFT)
    /// </summary>
    public required string Symbol { get; init; }

    /// <summary>
    /// Reporting period
    /// </summary>
    public Period Period { get; init; } = Period.Annual;

    public int Limit { get; init; } = 40;
}
