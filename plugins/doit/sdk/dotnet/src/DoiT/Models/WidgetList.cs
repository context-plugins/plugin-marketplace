using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Core.Validation.Attributes;

namespace DoiT.Models;

/// <summary>
/// Complete catalogue of widgets supported for the selected customer.
/// </summary>
public record WidgetList
{
    /// <summary>
    /// Supported widgets. Use an item's stable <c>alias</c> or customer-specific <c>id</c> with getWidget.
    /// </summary>
    [JsonPropertyName("items")]
    public required IReadOnlyList<WidgetItem> Items { get; init; }

    /// <summary>
    /// Number of entries in <c>items</c>.
    /// </summary>
    [JsonPropertyName("rowCount")]
    [Minimum(0)]
    public required long RowCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
