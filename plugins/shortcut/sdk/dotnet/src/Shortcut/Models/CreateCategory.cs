using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

public record CreateCategory
{
    /// <summary>
    /// The name of the new Category.
    /// </summary>
    [JsonPropertyName("name")]
    [StringLength(128, MinimumLength = 1)]
    public required string Name { get; init; }

    /// <summary>
    /// The hex color to be displayed with the Category (for example, "#ff0000").
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("color")]
    [MinLength(1)]
    [RegularExpression("^#[a-fA-F0-9]{6}$")]
    public string? Color { get; init; }

    /// <summary>
    /// This field can be set to another unique ID. In the case that the Category has been imported from another tool, the ID in the other tool can be indicated here.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("external_id")]
    [StringLength(128, MinimumLength = 1)]
    public string? ExternalId { get; init; }

    /// <summary>
    /// The type of entity this Category is associated with; currently Milestone or Objective is the only type of Category.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public object? Type { get; init; }
}
