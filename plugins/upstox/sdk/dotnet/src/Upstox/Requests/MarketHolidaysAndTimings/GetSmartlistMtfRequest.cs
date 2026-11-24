namespace Upstox.Requests.MarketHolidaysAndTimings;

/// <summary>
/// The inputs of the GetSmartlistMtf operation.
/// </summary>
public sealed record GetSmartlistMtfRequest
{
    /// <summary>
    /// Page number (optional, 1-indexed)
    /// </summary>
    public int? PageNumber { get; init; }

    /// <summary>
    /// Page size (optional, max 50)
    /// </summary>
    public int? PageSize { get; init; }
}
