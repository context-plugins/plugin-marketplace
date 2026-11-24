using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record Block9
{
    /// <summary>
    /// Discriminator value: table
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "table";

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
    /// The rows of the table.
    /// </summary>
    [JsonPropertyName("rows")]
    public required IReadOnlyList<IReadOnlyList<TableCellData>> Rows { get; init; }

    /// <summary>
    /// Whether the first row is a header row.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("headerRow")]
    public bool? HeaderRow { get; init; } = true;

    /// <summary>
    /// Whether the first column is a header column.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("headerColumn")]
    public bool? HeaderColumn { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
