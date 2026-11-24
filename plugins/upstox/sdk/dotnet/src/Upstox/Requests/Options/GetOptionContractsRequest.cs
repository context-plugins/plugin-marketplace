namespace Upstox.Requests.Options;

/// <summary>
/// The inputs of the GetOptionContracts operation.
/// </summary>
public sealed record GetOptionContractsRequest
{
    /// <summary>
    /// Instrument key for an underlying symbol
    /// </summary>
    public required string InstrumentKey { get; init; }

    /// <summary>
    /// Expiry date in format: YYYY-mm-dd
    /// </summary>
    public string? ExpiryDate { get; init; }
}
