using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.Enums;

namespace Beehiiv.Models;

public record ParagraphBlockTextSection
{
    /// <summary>
    /// The text content of the paragraph.
    /// </summary>
    [JsonPropertyName("text")]
    public required string Text { get; init; }

    /// <summary>
    /// The inline styles for the text.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("styling")]
    public IReadOnlyList<ParagraphBlockTextStyle>? Styling { get; init; }

    /// <summary>
    /// The CSS color value for the text.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("text_color")]
    public string? TextColor { get; init; }

    /// <summary>
    /// The CSS color value for the text highlight.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("highlight_color")]
    public string? HighlightColor { get; init; }

    /// <summary>
    /// The link of the text.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("link")]
    public Link2? Link { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
