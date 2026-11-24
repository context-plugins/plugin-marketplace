using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using UiPath.Core.Models;

namespace UiPath.Models;

/// <summary>
/// Request payload for creating a new test project
/// </summary>
public record CreateProjectRequest
{
    /// <summary>
    /// Display name for the new test project
    /// </summary>
    [JsonPropertyName("name")]
    [MaxLength(256)]
    public required string Name { get; init; }

    /// <summary>
    /// Optional description of the project's testing scope
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
