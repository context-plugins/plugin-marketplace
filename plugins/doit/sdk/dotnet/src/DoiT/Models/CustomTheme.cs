using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// A custom color theme applied to Cloud Analytics reports.
/// </summary>
public record CustomTheme
{
    /// <summary>
    /// The unique identifier of the custom theme.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

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

    /// <summary>
    /// The creation time of the custom theme.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public DateTimeOffset? CreateTime { get; init; }

    /// <summary>
    /// The time when the custom theme was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public DateTimeOffset? UpdateTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
