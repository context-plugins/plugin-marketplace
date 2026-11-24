namespace Upstox.Requests.MarketHolidaysAndTimings;

/// <summary>
/// The inputs of the GetDiiData operation.
/// </summary>
public sealed record GetDiiDataRequest
{
    /// <summary>
    /// Data type. Allowed value: NSE_EQ|CASH
    /// </summary>
    public required string DataType { get; init; }

    /// <summary>
    /// Interval. Allowed values: 1D, 1M
    /// </summary>
    public required string Interval { get; init; }

    /// <summary>
    /// Start date in YYYY-MM-DD format (optional)
    /// </summary>
    public string? From { get; init; }
}
