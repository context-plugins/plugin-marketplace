using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

/// <summary>
/// Response object for a task group, including its status and metadata.
/// </summary>
public record TaskGroupResponse
{
    /// <summary>
    /// ID of the group.
    /// </summary>
    [JsonPropertyName("taskgroup_id")]
    public required string TaskgroupId { get; init; }

    /// <summary>
    /// User-provided metadata stored with the group.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public Metadata6? Metadata { get; init; }

    /// <summary>
    /// Status of the group.
    /// </summary>
    [JsonPropertyName("status")]
    public required TaskGroupStatus3 Status { get; init; }

    /// <summary>
    /// Timestamp of the creation of the group, as an RFC 3339 string.
    /// </summary>
    [JsonPropertyName("created_at")]
    public required CreatedAt1 CreatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
