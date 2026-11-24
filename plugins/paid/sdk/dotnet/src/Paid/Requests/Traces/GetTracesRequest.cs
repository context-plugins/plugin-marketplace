using System;

namespace Paid.Requests.Traces;

/// <summary>
/// The inputs of the GetTraces operation.
/// </summary>
public sealed record GetTracesRequest
{
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
    /// Filter traces by external customer ID
    /// </summary>
    public string? ExternalCustomerId { get; init; }

    /// <summary>
    /// Filter traces by external product ID
    /// </summary>
    public string? ExternalProductId { get; init; }

    /// <summary>
    /// DEPRECATED: Use externalProductId instead. Filter traces by external agent ID
    /// </summary>
    public string? ExternalAgentId { get; init; }

    /// <summary>
    /// Filter traces by metadata fields. Must be a valid JSON object (e.g., {"key1":"value1","key2":"value2"}). All specified fields must match (AND logic).
    /// </summary>
    public string? Metadata { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
