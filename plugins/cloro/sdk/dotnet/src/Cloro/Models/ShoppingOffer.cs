using System.Collections.Generic;
using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

/// <summary>
/// Shopping offer with pricing details from a specific merchant
/// </summary>
public record ShoppingOffer
{
    /// <summary>
    /// Merchant name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merchant_name")]
    public string? MerchantName { get; init; }

    /// <summary>
    /// Merchant subtitle or additional info
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merchant_subtitle")]
    public string? MerchantSubtitle { get; init; }

    /// <summary>
    /// Third-party seller on the marketplace
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("marketplace_seller")]
    public string? MarketplaceSeller { get; init; }

    /// <summary>
    /// Seller name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("seller_name")]
    public string? SellerName { get; init; }

    /// <summary>
    /// Product brand. Set on only some offers, so often <c>null</c> or absent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("brand")]
    public string? Brand { get; init; }

    /// <summary>
    /// Product name as listed by merchant
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("product_name")]
    public string? ProductName { get; init; }

    /// <summary>
    /// Offer URL with attribution
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    public string? Url { get; init; }

    /// <summary>
    /// Offer price
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("price")]
    public string? Price { get; init; }

    /// <summary>
    /// Stock and delivery information
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("details")]
    public string? Details { get; init; }

    /// <summary>
    /// Original price before discount
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("original_price")]
    public string? OriginalPrice { get; init; }

    /// <summary>
    /// Whether the product is available
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("available")]
    public bool? Available { get; init; }

    /// <summary>
    /// Whether the product can be checked out directly
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("checkoutable")]
    public bool? Checkoutable { get; init; }

    /// <summary>
    /// Whether this is a digital product
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_digital")]
    public bool? IsDigital { get; init; }

    /// <summary>
    /// Checkout payload data
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("checkout_payload")]
    public string? CheckoutPayload { get; init; }

    /// <summary>
    /// Image URLs for checkout display
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("checkout_image_urls")]
    public IReadOnlyList<string>? CheckoutImageUrls { get; init; }

    /// <summary>
    /// Shop identifier
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shop_id")]
    public string? ShopId { get; init; }

    /// <summary>
    /// Data provider identifier
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("provider")]
    public string? Provider { get; init; }

    /// <summary>
    /// Detailed price breakdown for an offer
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("price_details")]
    public PriceDetails? PriceDetails { get; init; }

    /// <summary>
    /// Promotional tag on an offer
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tag")]
    public OfferTag? Tag { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
