using AlphAi.Models.Enums;

namespace AlphAi.Requests.Calendar;

/// <summary>
/// The inputs of the GetApiCalendar operation.
/// </summary>
public sealed record GetApiCalendarRequest
{
    /// <summary>
    /// Window start, inclusive. <c>YYYY-MM-DD</c> (UTC midnight) or an ISO datetime (naive = UTC). Default: today, UTC midnight.
    /// </summary>
    public string? FromDate { get; init; }

    /// <summary>
    /// Window end, exclusive. Same formats. Default <c>from_date</c> + 7 days; span capped at 400 days.
    /// </summary>
    public string? ToDate { get; init; }

    /// <summary>
    /// Narrow to specific series, comma-separated. Unknown keys return 400.
    /// </summary>
    public string? EventKey { get; init; }

    /// <summary>
    /// Narrow by importance tier.
    /// </summary>
    public Importance? Importance { get; init; }

    /// <summary>
    /// v1 covers US releases only.
    /// </summary>
    public Country Country { get; init; } = Country.Us;
}
