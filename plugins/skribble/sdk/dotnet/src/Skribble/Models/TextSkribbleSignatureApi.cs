using System.Text.Json.Serialization;
using Skribble.Core.Models;

namespace Skribble.Models;

/// <summary>
/// Text displayed inside the form field.
/// </summary>
public record TextSkribbleSignatureApi
{
    /// <summary>
    /// Content of the text field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content")]
    public string? Content { get; init; }

    /// <summary>
    /// Font name used. For PDF: all default PDF fonts or fonts already embedded in the document.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("font_name")]
    public string? FontName { get; init; }

    /// <summary>
    /// Font size used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("font_size")]
    public string? FontSize { get; init; }

    /// <summary>
    /// Font color as RGB value encoded in hex.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("font_color")]
    public string? FontColor { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
