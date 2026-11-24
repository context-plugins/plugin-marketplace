namespace Upstox.Requests.MarketHolidaysAndTimings;

/// <summary>
/// The inputs of the GetOiData operation.
/// </summary>
public sealed record GetOiDataRequest
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
    /// Date in YYYY-MM-DD format for which OI data is required
    /// </summary>
    public required string Date { get; init; }
}
