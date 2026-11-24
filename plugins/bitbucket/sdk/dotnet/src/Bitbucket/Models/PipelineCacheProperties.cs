using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Models;

namespace Bitbucket.Models;

public record PipelineCacheProperties
{
    /// <summary>
    /// The UUID identifying the pipeline cache.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uuid")]
    public string? Uuid { get; init; }

    /// <summary>
    /// The UUID of the pipeline that created the cache.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pipeline_uuid")]
    public string? PipelineUuid { get; init; }

    /// <summary>
    /// The uuid of the step that created the cache.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("step_uuid")]
    public string? StepUuid { get; init; }

    /// <summary>
    /// The name of the cache.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The key hash of the cache version.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("key_hash")]
    public string? KeyHash { get; init; }

    /// <summary>
    /// The path where the cache contents were retrieved from.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("path")]
    public string? Path { get; init; }

    /// <summary>
    /// The size of the file containing the archive of the cache.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("file_size_bytes")]
    public int? FileSizeBytes { get; init; }

    /// <summary>
    /// The timestamp when the cache was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_on")]
    public DateTimeOffset? CreatedOn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
