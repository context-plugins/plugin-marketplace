using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.Enums;

namespace Beehiiv.Models;

public record TableCellData
{
    /// <summary>
    /// The text content of the cell.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("text")]
    public string? Text { get; init; }

    /// <summary>
    /// The formatted content of the cell.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("formattedText")]
    public IReadOnlyList<ParagraphBlockTextSection>? FormattedText { get; init; }

    /// <summary>
    /// The text alignment of the cell.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("alignment")]
    public TextAlignment13? Alignment { get; init; }

    /// <summary>
    /// The number of columns the cell spans.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("colspan")]
    public int? Colspan { get; init; } = 1;

    /// <summary>
    /// The number of rows the cell spans.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rowspan")]
    public int? Rowspan { get; init; } = 1;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
