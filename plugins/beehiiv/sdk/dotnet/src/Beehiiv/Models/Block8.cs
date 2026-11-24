using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.AnyOf;
using Beehiiv.Models.Enums;

namespace Beehiiv.Models;

public record Block8
{
    /// <summary>
    /// Discriminator value: list
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "list";

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
    /// The items in the list.
    /// </summary>
    [JsonPropertyName("items")]
    public required IReadOnlyList<ListBlockItem> Items { get; init; }

    /// <summary>
    /// The type of list (e.g., ordered, unordered).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("listType")]
    public ListType? ListType { get; init; }

    /// <summary>
    /// The number to start the list at. Only applicable if listType is ordered.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startNumber")]
    public int? StartNumber { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
