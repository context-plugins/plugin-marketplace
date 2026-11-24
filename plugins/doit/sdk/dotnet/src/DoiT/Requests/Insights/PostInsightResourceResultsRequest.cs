using DoiT.Core.Validation.Attributes;
using DoiT.Models;
using DoiT.Models.Enums;

namespace DoiT.Requests.Insights;

/// <summary>
/// The inputs of the PostInsightResourceResults operation.
/// </summary>
public sealed record PostInsightResourceResultsRequest
{
    /// <summary>
    /// Only insights created via the public API can be managed. Currently only "public-api" is supported.
    /// </summary>
    public required SourceId SourceId { get; init; }

    /// <summary>
    /// The unique key identifying the insight.
    /// </summary>
    public required string InsightKey { get; init; }

    /// <summary>
    /// Maximum number of results per page in the response (default 1000, max 5000).
    /// </summary>
    [Minimum(1)]
    [Maximum(5000)]
    public int MaxResults { get; init; } = 1000;

    public required CreateResourceResultsBody Body { get; init; }
}
