using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// The theme currently active for the authenticated user.
/// </summary>
public record ActiveTheme
{
    /// <summary>
    /// Identifier of the active theme. The reserved sentinel <c>"default"</c> is
    /// returned when the user is using the built-in default (no custom or
    /// preset theme stored).
    /// </summary>
    [JsonPropertyName("themeId")]
    public string ThemeId { get; init; } = "default";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
