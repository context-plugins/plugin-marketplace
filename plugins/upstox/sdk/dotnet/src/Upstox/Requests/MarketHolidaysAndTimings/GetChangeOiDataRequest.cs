namespace Upstox.Requests.MarketHolidaysAndTimings;

/// <summary>
/// The inputs of the GetChangeOiData operation.
/// </summary>
public sealed record GetChangeOiDataRequest
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
    /// Date in YYYY-MM-DD format for which change OI data is required
    /// </summary>
    public required string Date { get; init; }

    /// <summary>
    /// Number of days for which difference in OI is required
    /// </summary>
    public required int Interval { get; init; }
}
