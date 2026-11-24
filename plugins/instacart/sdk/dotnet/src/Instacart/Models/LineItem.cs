using System.Collections.Generic;
using System.Text.Json.Serialization;
using Instacart.Core.Models;
using Instacart.Core.Validation.Attributes;

namespace Instacart.Models;

public record LineItem
{
    /// <summary>
    /// The name of the product.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The quantity of the product to add.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quantity")]
    [Minimum(1.0)]
    public double? Quantity { get; init; }

    /// <summary>
    /// The unit of measurement for the quantity.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unit")]
    public string? Unit { get; init; }

    /// <summary>
    /// Custom display text for the line item on the page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("display_text")]
    public string? DisplayText { get; init; }

    /// <summary>
    /// Instacart product identifiers to match specific products.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("product_ids")]
    public IReadOnlyList<string>? ProductIds { get; init; }

    /// <summary>
    /// Universal Product Codes to match specific products.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("upcs")]
    public IReadOnlyList<string>? Upcs { get; init; }

    /// <summary>
    /// Measurement details for the line item.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("line_item_measurements")]
    public LineItemMeasurements? LineItemMeasurements { get; init; }

    /// <summary>
    /// Filters to narrow product matching.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filters")]
    public Filters? Filters { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
