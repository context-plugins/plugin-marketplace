using System;

namespace Paid.Requests.Plans;

/// <summary>
/// The inputs of the GetUsage operation.
/// </summary>
public sealed record GetUsageRequest
{
    /// <summary>
    /// The ID of the plan
    /// </summary>
    public required Guid PlanId { get; init; }

    /// <summary>
    /// The external ID of the customer
    /// </summary>
    public required string ExternalId { get; init; }

    /// <summary>
    /// Maximum number of usage summaries to return (1-1000)
    /// </summary>
    public int Limit { get; init; } = 100;

    /// <summary>
    /// Number of usage summaries to skip for pagination
    /// </summary>
    public int Offset { get; init; } = 0;

    /// <summary>
    /// Filter usage summaries starting from this time (ISO 8601 format). Returns summaries that overlap with the time range.
    /// </summary>
    public DateTimeOffset? StartTime { get; init; }

    /// <summary>
    /// Filter usage summaries up to this time (ISO 8601 format). Returns summaries that overlap with the time range.
    /// </summary>
    public DateTimeOffset? EndTime { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
