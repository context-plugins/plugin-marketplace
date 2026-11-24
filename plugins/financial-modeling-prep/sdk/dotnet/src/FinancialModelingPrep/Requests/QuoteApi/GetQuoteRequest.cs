namespace FinancialModelingPrep.Requests.QuoteApi;

/// <summary>
/// The inputs of the GetQuote operation.
/// </summary>
public sealed record GetQuoteRequest
{
    /// <summary>
    /// Ticker symbol (e.g., AAPL, MSFT)
    /// </summary>
    public required string Symbol { get; init; }
}
