namespace ApiVerve.Requests.Finance;

/// <summary>
/// The inputs of the Stockexchange operation.
/// </summary>
public sealed record StockexchangeRequest
{
    /// <summary>
    /// The 4-character Market Identifier Code (e.g., XNYS for NYSE, XNAS for NASDAQ)
    /// </summary>
    public required string Mic { get; init; }
}
