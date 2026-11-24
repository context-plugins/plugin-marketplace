using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// User-facing collapse of the source-side identity tuple.
/// </summary>
public record GoogleCloudApihubV1GeneratedSpecApiSource
{
    /// <summary>
    /// Output only. Server-supplied label (e.g. "Apigee X").
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("typeDisplayName")]
    public string? TypeDisplayName { get; init; }

    /// <summary>
    /// Output only. Per-source instance label (e.g. "/" for Apigee X).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceDisplayName")]
    public string? SourceDisplayName { get; init; }

    /// <summary>
    /// Output only. The source type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type1ApigeeProjectsApi? Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
