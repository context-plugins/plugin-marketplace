using System.Text.Json.Serialization;
using AtlassianCompass.Core.Models;
using AtlassianCompass.Models.Enums;

namespace AtlassianCompass.Models;

/// <summary>
/// The environment where the deployment event has occurred.
/// </summary>
public record CompassDeploymentEventEnvironmentInputDto
{
    /// <summary>
    /// The type of environment where the deployment event occurred.
    /// </summary>
    [JsonPropertyName("category")]
    public required Category Category { get; init; }

    /// <summary>
    /// The display name of the environment where the deployment event occurred.
    /// </summary>
    [JsonPropertyName("displayName")]
    public required string DisplayName { get; init; }

    /// <summary>
    /// The ID of the environment where the deployment event occurred.
    /// </summary>
    [JsonPropertyName("environmentId")]
    public required string EnvironmentId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
