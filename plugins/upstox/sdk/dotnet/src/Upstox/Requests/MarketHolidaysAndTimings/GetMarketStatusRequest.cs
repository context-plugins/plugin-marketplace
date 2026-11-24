using System.ComponentModel.DataAnnotations;

namespace Upstox.Requests.MarketHolidaysAndTimings;

/// <summary>
/// The inputs of the GetMarketStatus operation.
/// </summary>
public sealed record GetMarketStatusRequest
{
    [RegularExpression("^(\\s*|(?:NSE|NFO|CDS|BSE|BFO|BCD|MCX|NSCOM)+)$")]
    public required string Exchange { get; init; }
}
