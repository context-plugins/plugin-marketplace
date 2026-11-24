using System.Text.Json.Serialization;
using AtlassianCompass.Core.Models;

namespace AtlassianCompass.Models;

/// <summary>
/// The build event pipeline.
/// </summary>
public record CompassBuildEventPipelineInputDto
{
    /// <summary>
    /// The ID of the build event pipeline should be unique per build event. Otherwise, any existing event with a matching value will be overwritten.
    /// </summary>
    [JsonPropertyName("pipelineId")]
    public required string PipelineId { get; init; }

    /// <summary>
    /// The URL to the build event pipeline.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    public string? Url { get; init; }

    /// <summary>
    /// The name of the build event pipeline.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
