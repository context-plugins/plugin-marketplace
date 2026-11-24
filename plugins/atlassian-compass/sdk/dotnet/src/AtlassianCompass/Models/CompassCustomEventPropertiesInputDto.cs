using System.Text.Json.Serialization;
using AtlassianCompass.Core.Models;
using AtlassianCompass.Models.Enums;

namespace AtlassianCompass.Models;

/// <summary>
/// The list of properties of the custom event.
/// </summary>
public record CompassCustomEventPropertiesInputDto
{
    /// <summary>
    /// The ID of the custom event.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The icon for the custom event.
    /// </summary>
    [JsonPropertyName("icon")]
    public required Icon Icon { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
