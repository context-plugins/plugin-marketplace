using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Request body for creating a custom theme.
/// </summary>
public record CreateCustomThemeRequest
{
    /// <summary>
    /// The display name of the custom theme.
    /// </summary>
    [JsonPropertyName("name")]
    [MaxLength(200)]
    public required string Name { get; init; }

    /// <summary>
    /// A color in hex notation. Accepts <c>#RGB</c>, <c>#RRGGBB</c>, or <c>#RRGGBBAA</c>.
    /// </summary>
    [JsonPropertyName("primaryColor")]
    [RegularExpression("^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$")]
    public required string PrimaryColor { get; init; }

    /// <summary>
    /// Palettes for light and dark display modes. Each palette must contain between 1 and 32 hex colors.
    /// </summary>
    [JsonPropertyName("colors")]
    public required ThemeColors Colors { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
