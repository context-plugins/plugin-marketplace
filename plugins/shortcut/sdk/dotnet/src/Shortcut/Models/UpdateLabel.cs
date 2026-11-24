using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

public record UpdateLabel
{
    /// <summary>
    /// The new name of the label.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    [StringLength(128, MinimumLength = 1)]
    public string? Name { get; init; }

    /// <summary>
    /// The new description of the label.
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
    /// A true/false boolean indicating if the Label has been archived.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("archived")]
    public bool? Archived { get; init; }
}
