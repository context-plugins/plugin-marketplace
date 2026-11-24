using Upstox.Core.Validation.Attributes;

namespace Upstox.Requests.PostTrade;

/// <summary>
/// The inputs of the GetTradesByDateRange operation.
/// </summary>
public sealed record GetTradesByDateRangeRequest
{
    /// <summary>
    /// Date from which trade history needs to be fetched. Date in YYYY-mm-dd format
    /// </summary>
    public required string StartDate { get; init; }

    /// <summary>
    /// Date till which history needs needs to be fetched. Date in YYYY-mm-dd format
    /// </summary>
    public required string EndDate { get; init; }

    /// <summary>
    /// Page number for which you want to fetch trade history
    /// </summary>
    [Minimum(1)]
    public required int PageNumber { get; init; }

    /// <summary>
    /// How many records you want for a page
    /// </summary>
    [Minimum(1)]
    [Maximum(5000)]
    public required int PageSize { get; init; }

    /// <summary>
    /// Segment for which data is requested can be from the following options EQ - Equity,   FO - Futures and Options,   COM  - Commodity,   CD - Currency Derivatives MF - Mutual Funds
    /// </summary>
    public string Segment { get; init; } = "";
}
