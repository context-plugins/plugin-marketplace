namespace FinancialModelingPrep.Requests.Profile;

/// <summary>
/// The inputs of the GetCompanyProfile operation.
/// </summary>
public sealed record GetCompanyProfileRequest
{
    /// <summary>
    /// Ticker symbol (e.g., AAPL, MSFT)
    /// </summary>
    public required string Symbol { get; init; }
}
