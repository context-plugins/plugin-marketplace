using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.OneOf;

namespace Beehiiv.Models;

public record Block16
{
    /// <summary>
    /// Discriminator value: section
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "section";

    /// <summary>
    /// The blocks to group inside this section. Must contain at least one block. Cannot contain <c>section</c> or <c>columns</c> blocks.
    /// </summary>
    [JsonPropertyName("blocks")]
    public required IReadOnlyList<SectionableBlock14> Blocks { get; init; }

    /// <summary>
    /// Optional styling applied to the section as a whole (background color, padding, borders, etc.).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("visual_settings")]
    public VisualSettings32? VisualSettings { get; init; }

    /// <summary>
    /// Optional rules for when/where this section is shown, including dynamic content targeting via condition sets.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("visibility_settings")]
    public VisibilitySettings33? VisibilitySettings { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
