using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// Output only. The metadata of the source from which the api operation was collected.
/// </summary>
public record GoogleCloudApihubV1SourceMetadata1
{
    /// <summary>
    /// Output only. The unique identifier of the resource at the source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("originalResourceId")]
    public string? OriginalResourceId { get; init; }

    /// <summary>
    /// Output only. The time at which the resource was created at the source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("originalResourceCreateTime")]
    public string? OriginalResourceCreateTime { get; init; }

    /// <summary>
    /// Output only. The source of the resource is a plugin instance action.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pluginInstanceActionSource")]
    public GoogleCloudApihubV1PluginInstanceActionSource2? PluginInstanceActionSource { get; init; }

    /// <summary>
    /// Output only. The type of the source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceType")]
    public SourceType? SourceType { get; init; }

    /// <summary>
    /// Output only. The time at which the resource was last updated at the source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("originalResourceUpdateTime")]
    public string? OriginalResourceUpdateTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
