using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Request body for setting the active custom or preset theme for the authenticated user.
/// </summary>
public record SetActiveThemeRequest
{
    /// <summary>
    /// Identifier of the theme to activate. Send the reserved sentinel
    /// <c>"default"</c> to clear the active theme and fall back to the built-in
    /// default.
    /// </summary>
    [JsonPropertyName("themeId")]
    public string ThemeId { get; init; } = "default";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
