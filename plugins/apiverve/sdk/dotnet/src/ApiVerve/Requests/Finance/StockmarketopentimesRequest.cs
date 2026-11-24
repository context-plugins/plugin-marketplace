namespace ApiVerve.Requests.Finance;

/// <summary>
/// The inputs of the Stockmarketopentimes operation.
/// </summary>
public sealed record StockmarketopentimesRequest
{
    /// <summary>
    /// The stock exchange code
    /// </summary>
    public required string Exchange { get; init; }
}
