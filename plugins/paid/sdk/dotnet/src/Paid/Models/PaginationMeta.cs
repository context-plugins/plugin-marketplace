using System;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

/// <summary>
/// Pagination metadata for cost traces
/// </summary>
public record PaginationMeta
{
    /// <summary>
    /// The requested limit
    /// </summary>
    [JsonPropertyName("limit")]
    public required int Limit { get; init; }

    /// <summary>
    /// The requested offset
    /// </summary>
    [JsonPropertyName("offset")]
    public required int Offset { get; init; }

    /// <summary>
    /// Number of items returned in this response
    /// </summary>
    [JsonPropertyName("count")]
    public required int Count { get; init; }

    /// <summary>
    /// Whether there are more results available
    /// </summary>
    [JsonPropertyName("hasMore")]
    public required bool HasMore { get; init; }

    /// <summary>
    /// The startTime filter that was applied (if any)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startTime")]
    public DateTimeOffset? StartTime { get; init; }

    /// <summary>
    /// The endTime filter that was applied (if any)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endTime")]
    public DateTimeOffset? EndTime { get; init; }

    /// <summary>
    /// The externalCustomerId filter that was applied (if any)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("externalCustomerId")]
    public string? ExternalCustomerId { get; init; }

    /// <summary>
    /// The externalProductId filter that was applied (if any)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("externalProductId")]
    public string? ExternalProductId { get; init; }

    /// <summary>
    /// DEPRECATED: Use externalProductId instead. The externalAgentId filter that was applied (if any)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("externalAgentId")]
    public string? ExternalAgentId { get; init; }

    /// <summary>
    /// The metadata filter that was applied (if any)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public string? Metadata { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
