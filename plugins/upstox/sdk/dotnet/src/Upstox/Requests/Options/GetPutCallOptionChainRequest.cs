namespace Upstox.Requests.Options;

/// <summary>
/// The inputs of the GetPutCallOptionChain operation.
/// </summary>
public sealed record GetPutCallOptionChainRequest
{
    /// <summary>
    /// Instrument key for an underlying symbol
    /// </summary>
    public required string InstrumentKey { get; init; }

    /// <summary>
    /// Expiry date in format: YYYY-mm-dd
    /// </summary>
    public required string ExpiryDate { get; init; }
}
