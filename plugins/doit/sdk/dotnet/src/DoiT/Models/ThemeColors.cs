using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Palettes for light and dark display modes. Each palette must contain between 1 and 32 hex colors.
/// </summary>
public record ThemeColors
{
    /// <summary>
    /// Colors used when the report is displayed in light mode.
    /// </summary>
    [JsonPropertyName("light")]
    [MinLength(1)]
    [MaxLength(32)]
    public required IReadOnlyList<string> Light { get; init; }

    /// <summary>
    /// Colors used when the report is displayed in dark mode.
    /// </summary>
    [JsonPropertyName("dark")]
    [MinLength(1)]
    [MaxLength(32)]
    public required IReadOnlyList<string> Dark { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
