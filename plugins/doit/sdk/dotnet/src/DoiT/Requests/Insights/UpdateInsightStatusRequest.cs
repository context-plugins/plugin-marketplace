using DoiT.Models;
using DoiT.Models.Enums;

namespace DoiT.Requests.Insights;

/// <summary>
/// The inputs of the UpdateInsightStatus operation.
/// </summary>
public sealed record UpdateInsightStatusRequest
{
    /// <summary>
    /// Only insights created via the public API can be managed. Currently only "public-api" is supported.
    /// </summary>
    public required SourceId SourceId { get; init; }

    /// <summary>
    /// The unique key identifying the insight to update.
    /// </summary>
    public required string InsightKey { get; init; }

    public required UpdateStatusRequest Body { get; init; }
}
