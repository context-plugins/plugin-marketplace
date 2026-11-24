using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record Offer
{
    /// <summary>
    /// Offer URL with Perplexity referral parameters
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
    /// Merchant name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merchant_name")]
    public string? MerchantName { get; init; }

    /// <summary>
    /// Product name as listed by the merchant
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("product_name")]
    public string? ProductName { get; init; }

    /// <summary>
    /// Whether the offer is in stock
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("available")]
    public bool? Available { get; init; }

    /// <summary>
    /// Detailed price breakdown
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("price_details")]
    public PriceDetails5? PriceDetails { get; init; }

    /// <summary>
    /// Original price before discount; null when not on sale
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("original_price")]
    public string? OriginalPrice { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
