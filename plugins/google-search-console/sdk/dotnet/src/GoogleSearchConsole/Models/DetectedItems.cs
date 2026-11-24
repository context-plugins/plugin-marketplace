using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Models;

namespace GoogleSearchConsole.Models;

/// <summary>
/// Rich Results items grouped by type.
/// </summary>
public record DetectedItems
{
    /// <summary>
    /// Rich Results type
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("richResultType")]
    public string? RichResultType { get; init; }

    /// <summary>
    /// List of Rich Results items.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("items")]
    public IReadOnlyList<Item>? Items { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
