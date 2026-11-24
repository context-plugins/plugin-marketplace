using DoiT.Models.Enums;

namespace DoiT.Requests.Insights;

/// <summary>
/// The inputs of the DeleteInsightResult operation.
/// </summary>
public sealed record DeleteInsightResultRequest
{
    /// <summary>
    /// Only insights created via the public API can be managed. Currently only "public-api" is supported.
    /// </summary>
    public required SourceId SourceId { get; init; }

    /// <summary>
    /// The unique key identifying the insight to delete.
    /// </summary>
    public required string InsightKey { get; init; }
}
