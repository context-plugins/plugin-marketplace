namespace Upstox.Requests.MarketHolidaysAndTimings;

/// <summary>
/// The inputs of the GetPcrData operation.
/// </summary>
public sealed record GetPcrDataRequest
{
    /// <summary>
    /// Underlying asset instrument key
    /// </summary>
    public required string InstrumentKey { get; init; }

    /// <summary>
    /// Expiry date in YYYY-MM-DD format
    /// </summary>
    public required string Expiry { get; init; }

    /// <summary>
    /// Date in YYYY-MM-DD format for which PCR data is required
    /// </summary>
    public required string Date { get; init; }

    /// <summary>
    /// Bucket interval in minutes for the insights list
    /// </summary>
    public required int BucketInterval { get; init; }
}
