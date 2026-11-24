using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record Block7
{
    /// <summary>
    /// Discriminator value: columns
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "columns";

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
    /// Whether columns should stack vertically on mobile devices.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stackOnMobile")]
    public bool? StackOnMobile { get; init; } = true;

    /// <summary>
    /// The blocks that make up the columns.
    /// </summary>
    [JsonPropertyName("columns")]
    public required IReadOnlyList<ColumnBlock> Columns { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
