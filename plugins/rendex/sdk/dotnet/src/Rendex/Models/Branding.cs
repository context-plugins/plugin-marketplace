using System.Text.Json.Serialization;
using Rendex.Core.Models;
using Rendex.Core.Validation;
using Rendex.Core.Validation.Attributes;

namespace Rendex.Models;

/// <summary>
/// Optional theme applied to the artifact header, body, and footer.
/// </summary>
public record Branding
{
    /// <summary>
    /// Absolute http(s) URL of a logo image shown in the header.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("logo")]
    [Format(FormatKind.Uri)]
    public string? Logo { get; init; }

    /// <summary>
    /// CSS color for the accent bar
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("accentColor")]
    public string? AccentColor { get; init; }

    /// <summary>
    /// CSS font-family stack applied to the body (e.g. 'Georgia
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("font")]
    public string? Font { get; init; }

    /// <summary>
    /// Plain-text header line shown beside the logo.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("header")]
    public string? Header { get; init; }

    /// <summary>
    /// Plain-text footer line shown at the bottom of every page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("footer")]
    public string? Footer { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
