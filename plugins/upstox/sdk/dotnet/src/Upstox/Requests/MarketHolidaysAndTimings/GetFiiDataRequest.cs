namespace Upstox.Requests.MarketHolidaysAndTimings;

/// <summary>
/// The inputs of the GetFiiData operation.
/// </summary>
public sealed record GetFiiDataRequest
{
    /// <summary>
    /// Data type. Allowed values: NSE_FO|INDEX_FUTURES, NSE_FO|STOCK_FUTURES, NSE_FO|INDEX_OPTIONS, NSE_FO|STOCK_OPTIONS, NSE_EQ|CASH
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
