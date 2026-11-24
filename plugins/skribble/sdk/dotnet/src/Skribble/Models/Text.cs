using System.Text.Json.Serialization;
using Skribble.Core.Models;

namespace Skribble.Models;

/// <summary>
/// Optional text to display inside the form field.
/// </summary>
public record Text
{
    /// <summary>
    /// Content of the text field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content")]
    public string? Content { get; init; }

    /// <summary>
    /// Font name to use. It is just a suggestion. For PDF: all default PDF fonts can be used or fonts which are already embedded in the document. If not specified, the default font of the form field will be used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("font_name")]
    public string? FontName { get; init; }

    /// <summary>
    /// Font size to use. If not specified, the default size for the form field will be used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("font_size")]
    public string? FontSize { get; init; }

    /// <summary>
    /// Font color to use as RGB value encoded in hex. Defaults to black (#000000).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("font_color")]
    public string? FontColor { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
