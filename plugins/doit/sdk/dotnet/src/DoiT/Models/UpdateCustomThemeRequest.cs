using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Request body for updating a custom theme. Only provided fields are modified.
/// </summary>
public record UpdateCustomThemeRequest
{
    /// <summary>
    /// The display name of the custom theme.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    [MaxLength(200)]
    public string? Name { get; init; }

    /// <summary>
    /// A color in hex notation. Accepts <c>#RGB</c>, <c>#RRGGBB</c>, or <c>#RRGGBBAA</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("primaryColor")]
    [RegularExpression("^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$")]
    public string? PrimaryColor { get; init; }

    /// <summary>
    /// Palettes for light and dark display modes. Each palette must contain between 1 and 32 hex colors.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("colors")]
    public ThemeColors? Colors { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
