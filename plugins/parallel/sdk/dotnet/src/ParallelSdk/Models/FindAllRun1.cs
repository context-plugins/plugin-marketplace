using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models;

/// <summary>
/// FindAll run object.
/// </summary>
public record FindAllRun1
{
    /// <summary>
    /// ID of the FindAll run.
    /// </summary>
    [JsonPropertyName("findall_id")]
    public required string FindallId { get; init; }

    /// <summary>
    /// Status object for the FindAll run.
    /// </summary>
    [JsonPropertyName("status")]
    public required FindAllRunStatus2 Status { get; init; }

    /// <summary>
    /// Generator for the FindAll run.
    /// </summary>
    [JsonPropertyName("generator")]
    public required Generator1 Generator { get; init; }

    /// <summary>
    /// Metadata for the FindAll run.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public Metadata? Metadata { get; init; }

    /// <summary>
    /// Timestamp of the creation of the run, in RFC 3339 format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public CreatedAt? CreatedAt { get; init; }

    /// <summary>
    /// Timestamp of the latest modification to the FindAll run result, in RFC 3339 format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("modified_at")]
    public ModifiedAt? ModifiedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
