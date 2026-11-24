using System.Text.Json.Serialization;
using AtlassianCompass.Core.Models;

namespace AtlassianCompass.Models;

/// <summary>
/// The list of properties of the flag event.
/// </summary>
public record CompassCreateFlagEventPropertiesInputDto
{
    /// <summary>
    /// The ID of the flag.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The flag's status. The recognized values (case-insensitive) are on, off, created, archived, deleted, and targeting_updated. Any other value, although acceptable, will be displayed as unknown on the activity feed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public string? Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
