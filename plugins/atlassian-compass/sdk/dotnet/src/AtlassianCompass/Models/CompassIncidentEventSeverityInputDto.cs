using System.Text.Json.Serialization;
using AtlassianCompass.Core.Models;
using AtlassianCompass.Models.Enums;

namespace AtlassianCompass.Models;

/// <summary>
/// The severity of an incident
/// </summary>
public record CompassIncidentEventSeverityInputDto
{
    /// <summary>
    /// The label to use for displaying the severity of the incident
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("label")]
    public string? Label { get; init; }

    /// <summary>
    /// The severity level. A severity level of 'ONE' is the most severe, and a level of 'FIVE' is the least severe.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("level")]
    public Level? Level { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
