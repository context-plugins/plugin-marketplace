using Instagram.Models.Enums;

namespace Instagram.Requests.Insights;

/// <summary>
/// The inputs of the GetUserInsights operation.
/// </summary>
public sealed record GetUserInsightsRequest
{
    public required string UserId { get; init; }

    /// <summary>
    /// Comma-separated list of metrics.
    /// </summary>
    public required string Metric { get; init; }

    /// <summary>
    /// Time period for aggregation.
    /// </summary>
    public required Period Period { get; init; }

    public required string AccessToken { get; init; }

    /// <summary>
    /// Unix timestamp for start of range.
    /// </summary>
    public int? Since { get; init; }

    /// <summary>
    /// Unix timestamp for end of range.
    /// </summary>
    public int? Until { get; init; }
}
