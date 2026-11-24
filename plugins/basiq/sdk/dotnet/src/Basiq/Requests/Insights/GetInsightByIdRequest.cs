using System;

namespace Basiq.Requests.Insights;

/// <summary>
/// The inputs of the GetInsightById operation.
/// </summary>
public sealed record GetInsightByIdRequest
{
    /// <summary>
    /// The unique identifier of the user
    /// </summary>
    public required Guid UserId { get; init; }

    /// <summary>
    /// The unique identifier of the insight (must be valid UUID format)
    /// </summary>
    public required Guid InsightId { get; init; }
}
