using System;

namespace Paid.Requests.Customers;

/// <summary>
/// The inputs of the GetCostsByExternalId operation.
/// </summary>
public sealed record GetCostsByExternalIdRequest
{
    /// <summary>
    /// The external ID of the customer
    /// </summary>
    public required string ExternalId { get; init; }

    /// <summary>
    /// Maximum number of traces to return (1-1000)
    /// </summary>
    public int Limit { get; init; } = 100;

    /// <summary>
    /// Number of traces to skip for pagination
    /// </summary>
    public int Offset { get; init; } = 0;

    /// <summary>
    /// Filter traces starting from this time (ISO 8601 format)
    /// </summary>
    public DateTimeOffset? StartTime { get; init; }

    /// <summary>
    /// Filter traces up to this time (ISO 8601 format)
    /// </summary>
    public DateTimeOffset? EndTime { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
