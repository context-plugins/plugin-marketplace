using System.ComponentModel.DataAnnotations;

namespace Upstox.Requests.MarketHolidaysAndTimings;

/// <summary>
/// The inputs of the GetHoliday operation.
/// </summary>
public sealed record GetHolidayRequest
{
    [RegularExpression("^(\\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$")]
    public required string Date { get; init; }
}
