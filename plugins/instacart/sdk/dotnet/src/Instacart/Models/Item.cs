using System;
using System.Text.Json.Serialization;
using Instacart.Core.Models;
using Instacart.Core.Validation.Attributes;

namespace Instacart.Models;

public record Item
{
    /// <summary>
    /// The retailer's unique product identifier linking this item to its parent product.
    /// </summary>
    [JsonPropertyName("product_code")]
    public required string ProductCode { get; init; }

    /// <summary>
    /// The retailer's unique store identifier where this item is sold.
    /// </summary>
    [JsonPropertyName("store_code")]
    public required string StoreCode { get; init; }

    /// <summary>
    /// The current selling price of the item at this store.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("price")]
    [Minimum(0.0)]
    public double? Price { get; init; }

    /// <summary>
    /// The promotional or sale price, if applicable.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sale_price")]
    [Minimum(0.0)]
    public double? SalePrice { get; init; }

    /// <summary>
    /// The start date of the sale period.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sale_start_date")]
    public DateTimeOffset? SaleStartDate { get; init; }

    /// <summary>
    /// The end date of the sale period.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sale_end_date")]
    public DateTimeOffset? SaleEndDate { get; init; }

    /// <summary>
    /// Whether the item is currently available for purchase at this store.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("available")]
    public bool? Available { get; init; }

    /// <summary>
    /// The current inventory count at this store.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inventory_count")]
    [Minimum(0)]
    public int? InventoryCount { get; init; }

    /// <summary>
    /// The store aisle where the item is located.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("aisle")]
    public string? Aisle { get; init; }

    /// <summary>
    /// The shelf location within the aisle.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shelf")]
    public string? Shelf { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
