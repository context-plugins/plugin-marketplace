using DoiT.Core.Validation.Attributes;

namespace DoiT.Requests.Insights;

/// <summary>
/// The inputs of the GetInsightResourceResults operation.
/// </summary>
public sealed record GetInsightResourceResultsRequest
{
    /// <summary>
    /// The identifier of the source that generated the insight.
    /// </summary>
    public required string SourceId { get; init; }

    /// <summary>
    /// The unique key identifying the insight.
    /// </summary>
    public required string InsightKey { get; init; }

    /// <summary>
    /// Token from a previous response to fetch the next page.
    /// </summary>
    public string? PageToken { get; init; }

    /// <summary>
    /// Maximum number of results per page (default 1000, max 5000).
    /// </summary>
    [Minimum(1)]
    [Maximum(5000)]
    public int MaxResults { get; init; } = 1000;
}
