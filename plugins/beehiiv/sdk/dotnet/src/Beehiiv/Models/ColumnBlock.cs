using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.Enums;
using Beehiiv.Models.OneOf;

namespace Beehiiv.Models;

public record ColumnBlock
{
    /// <summary>
    /// The column position. This field is deprecated but supported for existing column layouts.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("position")]
    public ColumnPosition1? Position { get; init; }

    /// <summary>
    /// The column width percentage. When omitted, width is calculated automatically.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("width")]
    public int? Width { get; init; }

    /// <summary>
    /// The vertical alignment of the column content.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("verticalAlign")]
    public ColumnVerticalAlignment2? VerticalAlign { get; init; }

    /// <summary>
    /// The blocks that make up the column.
    /// </summary>
    [JsonPropertyName("blocks")]
    public required IReadOnlyList<EmbeddableBlocks6> Blocks { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
