using System;

namespace FinancialModelingPrep.Requests.HistoricalPriceFull;

/// <summary>
/// The inputs of the GetHistoricalPrice operation.
/// </summary>
public sealed record GetHistoricalPriceRequest
{
    /// <summary>
    /// Ticker symbol (e.g., AAPL, MSFT)
    /// </summary>
    public required string Symbol { get; init; }

    public DateTimeOffset? From { get; init; }

    public DateTimeOffset? To { get; init; }
}
