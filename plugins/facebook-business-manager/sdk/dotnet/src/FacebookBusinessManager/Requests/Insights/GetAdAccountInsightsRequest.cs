using FacebookBusinessManager.Models.Enums;

namespace FacebookBusinessManager.Requests.Insights;

/// <summary>
/// The inputs of the GetAdAccountInsights operation.
/// </summary>
public sealed record GetAdAccountInsightsRequest
{
    /// <summary>
    /// The ID of the ad account (numeric, without the act_ prefix)
    /// </summary>
    public required string AdAccountId { get; init; }

    /// <summary>
    /// Comma-separated list of fields to include in the response. If omitted, default fields are returned.
    /// </summary>
    public string? Fields { get; init; }

    /// <summary>
    /// JSON object specifying the date range with since and until fields in YYYY-MM-DD format.
    /// </summary>
    public string? TimeRange { get; init; }

    /// <summary>
    /// Comma-separated list of breakdown dimensions such as age, gender, country, or placement.
    /// </summary>
    public string? Breakdowns { get; init; }

    /// <summary>
    /// Level of aggregation for results. Options include account, campaign, adset, or ad.
    /// </summary>
    public Level? Level { get; init; }

    /// <summary>
    /// Number of days for each increment in the time range, or use monthly or all_days.
    /// </summary>
    public string? TimeIncrement { get; init; }
}
