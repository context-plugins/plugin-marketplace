using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.Enums;

namespace Beehiiv.Models;

public record SectionableBlock
{
    /// <summary>
    /// Discriminator value: paragraph
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "paragraph";

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
    /// The plaintext content of the paragraph.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("plaintext")]
    public string? Plaintext { get; init; }

    /// <summary>
    /// The formatted content of the paragraph.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("formattedText")]
    public IReadOnlyList<ParagraphBlockTextSection>? FormattedText { get; init; }

    /// <summary>
    /// The text alignment of the paragraph (e.g., left, center, right).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("textAlignment")]
    public TextAlignment1? TextAlignment { get; init; }

    /// <summary>
    /// Legacy paragraph alignment field. Use <c>textAlignment</c> for new integrations.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("textAlign")]
    public TextAlignment2? TextAlign { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
