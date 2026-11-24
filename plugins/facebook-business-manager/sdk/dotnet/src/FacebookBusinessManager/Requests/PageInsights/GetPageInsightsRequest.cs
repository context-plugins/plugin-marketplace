using FacebookBusinessManager.Models.Enums;

namespace FacebookBusinessManager.Requests.PageInsights;

/// <summary>
/// The inputs of the GetPageInsights operation.
/// </summary>
public sealed record GetPageInsightsRequest
{
    /// <summary>
    /// The ID of the Facebook Page
    /// </summary>
    public required string PageId { get; init; }

    /// <summary>
    /// Comma-separated list of metrics to retrieve such as page_impressions, page_engaged_users, page_fans.
    /// </summary>
    public required string Metric { get; init; }

    /// <summary>
    /// Aggregation period for the metrics
    /// </summary>
    public Period? Period { get; init; }

    /// <summary>
    /// Start of the date range in Unix timestamp or YYYY-MM-DD format
    /// </summary>
    public string? Since { get; init; }

    /// <summary>
    /// End of the date range in Unix timestamp or YYYY-MM-DD format
    /// </summary>
    public string? Until { get; init; }
}
