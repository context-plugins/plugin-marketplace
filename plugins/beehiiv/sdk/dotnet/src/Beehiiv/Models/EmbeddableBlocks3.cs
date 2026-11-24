using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.Enums;

namespace Beehiiv.Models;

public record EmbeddableBlocks3
{
    /// <summary>
    /// Discriminator value: heading
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "heading";

    /// <summary>
    /// Optional styling for borders, spacing, colors, etc.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("visual_settings")]
    public VisualSettings1? VisualSettings { get; init; }

    /// <summary>
    /// Optional rules for when/where this block is shown, including dynamic content targeting via condition sets.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("visibility_settings")]
    public VisibilitySettings1? VisibilitySettings { get; init; }

    /// <summary>
    /// The level of the header (e.g., 1, 2, 3, etc.).
    /// </summary>
    [JsonPropertyName("level")]
    public required HeadingLevel1 Level { get; init; }

    /// <summary>
    /// The text alignment of the header (e.g., left, center, right).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("textAlignment")]
    public TextAlignment6? TextAlignment { get; init; }

    /// <summary>
    /// The text content of the header. Ignored if <c>formattedText</c> is provided.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("text")]
    public string? Text { get; init; }

    /// <summary>
    /// The formatted content of the header, supporting links and inline styling.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("formattedText")]
    public IReadOnlyList<ParagraphBlockTextSection>? FormattedText { get; init; }

    /// <summary>
    /// Whether the header should be an anchor header.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("anchorHeader")]
    public bool? AnchorHeader { get; init; } = true;

    /// <summary>
    /// Whether the header should be included in the table of contents.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("anchorIncludeInToc")]
    public bool? AnchorIncludeInToc { get; init; } = true;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
