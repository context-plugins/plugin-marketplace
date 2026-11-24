using System.Text.Json.Serialization;
using AtlassianCompass.Core.Models;
using AtlassianCompass.Models.Enums;

namespace AtlassianCompass.Models;

/// <summary>
/// The list of properties of the lifecycle event.
/// </summary>
public record CompassLifecycleEventInputPropertiesDto
{
    /// <summary>
    /// The ID of the lifecycle.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The stage of the lifecycle event.
    /// </summary>
    [JsonPropertyName("stage")]
    public required Stage Stage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
