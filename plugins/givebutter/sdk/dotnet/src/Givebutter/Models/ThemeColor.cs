using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Givebutter.Core.Models;

namespace Givebutter.Models;

/// <summary>
/// Hex color in the form <c>#rrggbb</c>.
/// </summary>
public record ThemeColor
{
    [JsonPropertyName("name")]
    public string Name { get; } = "theme_color";

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    [RegularExpression("^#[0-9a-fA-F]{6}$")]
    public string? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
