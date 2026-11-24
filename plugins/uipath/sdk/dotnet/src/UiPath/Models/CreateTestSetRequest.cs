using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using UiPath.Core.Models;

namespace UiPath.Models;

/// <summary>
/// Request payload for creating a new test set
/// </summary>
public record CreateTestSetRequest
{
    /// <summary>
    /// Display name for the new test set
    /// </summary>
    [JsonPropertyName("name")]
    [MaxLength(256)]
    public required string Name { get; init; }

    /// <summary>
    /// Optional description of the test set's purpose
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
