namespace Upstox.Requests.MarketHolidaysAndTimings;

/// <summary>
/// The inputs of the GetSmartlistOptions operation.
/// </summary>
public sealed record GetSmartlistOptionsRequest
{
    /// <summary>
    /// Asset type. Allowed values: INDEX, STOCK, COMMODITY
    /// </summary>
    public string? AssetType { get; init; }

    /// <summary>
    /// Category. Allowed values: TOP_TRADED, MOST_ACTIVE, OI_GAINERS, OI_LOSERS, PRICE_GAINERS, PRICE_LOSERS, IV_GAINERS, IV_LOSERS, UNDER_5000, UNDER_10000 (COMMODITY supports only: TOP_TRADED, MOST_ACTIVE, OI_GAINERS, OI_LOSERS)
    /// </summary>
    public string? Category { get; init; }

    /// <summary>
    /// Page number (optional, 1-indexed)
    /// </summary>
    public int? PageNumber { get; init; }

    /// <summary>
    /// Page size (optional, max 50)
    /// </summary>
    public int? PageSize { get; init; }
}
