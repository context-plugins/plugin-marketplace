using System.Collections.Generic;
using System.Text.Json.Serialization;
using Cloro.Core.Models;
using Cloro.Core.Validation;
using Cloro.Core.Validation.Attributes;

namespace Cloro.Models;

public record ShoppingCard1
{
    /// <summary>
    /// 1-indexed rank across the <c>shoppingCards</c> array, in display order
    /// </summary>
    [JsonPropertyName("position")]
    public required int Position { get; init; }

    /// <summary>
    /// Product title
    /// </summary>
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    /// <summary>
    /// Google Shopping URL for the product
    /// </summary>
    [JsonPropertyName("productLink")]
    [Format(FormatKind.Uri)]
    public required string ProductLink { get; init; }

    /// <summary>
    /// Google Shopping product ID
    /// </summary>
    [JsonPropertyName("productId")]
    public required string ProductId { get; init; }

    /// <summary>
    /// Current price. For a range, <c>value</c> is the lowest price. For an installment offer, only <c>raw</c> is present
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("price")]
    public Price1? Price { get; init; }

    /// <summary>
    /// Price before a discount, same shape as <c>price</c>. Absent when there is no discount
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("oldPrice")]
    public OldPrice? OldPrice { get; init; }

    /// <summary>
    /// Store that sells the product at <c>price</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("store")]
    public string? Store { get; init; }

    /// <summary>
    /// Direct URL of the product on the store's site
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("storeLink")]
    [Format(FormatKind.Uri)]
    public string? StoreLink { get; init; }

    /// <summary>
    /// Number of stores that sell the product. Gemini shows "&amp; more" after the store name when it is above 1
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("storeCount")]
    public int? StoreCount { get; init; }

    /// <summary>
    /// Shipping cost as Gemini displays it
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shipping")]
    public string? Shipping { get; init; }

    /// <summary>
    /// Delivery time as Gemini displays it
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deliveryTime")]
    public string? DeliveryTime { get; init; }

    /// <summary>
    /// Product rating (0-5). Absent for a product with no reviews
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rating")]
    public double? Rating { get; init; }

    /// <summary>
    /// Number of reviews
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reviews")]
    public int? Reviews { get; init; }

    /// <summary>
    /// Product brand
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("brand")]
    public string? Brand { get; init; }

    /// <summary>
    /// Product description
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Image URL that the card shows
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("thumbnail")]
    [Format(FormatKind.Uri)]
    public string? Thumbnail { get; init; }

    /// <summary>
    /// All product image URLs. The first one is <c>thumbnail</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("images")]
    public IReadOnlyList<string>? Images { get; init; }

    /// <summary>
    /// Google Shopping catalog ID
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("catalogId")]
    public string? CatalogId { get; init; }

    /// <summary>
    /// Google Shopping product cluster ID
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gpcId")]
    public string? GpcId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
