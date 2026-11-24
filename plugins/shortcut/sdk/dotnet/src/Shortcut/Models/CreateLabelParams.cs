using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// Request parameters for creating a Label on a Shortcut Story.
/// </summary>
public record CreateLabelParams
{
    /// <summary>
    /// The name of the new Label.
    /// </summary>
    [JsonPropertyName("name")]
    [StringLength(128, MinimumLength = 1)]
    public required string Name { get; init; }

    /// <summary>
    /// The description of the new Label.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    [MaxLength(1024)]
    public string? Description { get; init; }

    /// <summary>
    /// The hex color to be displayed with the Label (for example, "#ff0000").
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("color")]
    [MinLength(1)]
    [RegularExpression("^#[a-fA-F0-9]{6}$")]
    public string? Color { get; init; }

    /// <summary>
    /// This field can be set to another unique ID. In the case that the Label has been imported from another tool, the ID in the other tool can be indicated here.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("external_id")]
    [StringLength(128, MinimumLength = 1)]
    public string? ExternalId { get; init; }
}
