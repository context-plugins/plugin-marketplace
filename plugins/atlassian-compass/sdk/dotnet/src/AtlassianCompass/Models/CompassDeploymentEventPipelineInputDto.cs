using System.Text.Json.Serialization;
using AtlassianCompass.Core.Models;

namespace AtlassianCompass.Models;

/// <summary>
/// The deployment event pipeline.
/// </summary>
public record CompassDeploymentEventPipelineInputDto
{
    /// <summary>
    /// The ID of the deployment event pipeline.
    /// </summary>
    [JsonPropertyName("pipelineId")]
    public required string PipelineId { get; init; }

    /// <summary>
    /// The URL of the deployment event pipeline.
    /// </summary>
    [JsonPropertyName("url")]
    public required string Url { get; init; }

    /// <summary>
    /// The name of the deployment event pipeline.
    /// </summary>
    [JsonPropertyName("displayName")]
    public required string DisplayName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
