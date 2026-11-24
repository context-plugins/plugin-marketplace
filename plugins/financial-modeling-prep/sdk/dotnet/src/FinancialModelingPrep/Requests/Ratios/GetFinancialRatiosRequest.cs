using FinancialModelingPrep.Models.Enums;

namespace FinancialModelingPrep.Requests.Ratios;

/// <summary>
/// The inputs of the GetFinancialRatios operation.
/// </summary>
public sealed record GetFinancialRatiosRequest
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
