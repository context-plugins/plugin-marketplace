namespace ApiVerve.Requests.Finance;

/// <summary>
/// The inputs of the Binlookup operation.
/// </summary>
public sealed record BinlookupRequest
{
    /// <summary>
    /// The first six digits of the credit card number (BIN)
    /// </summary>
    public required string Bin { get; init; }
}
