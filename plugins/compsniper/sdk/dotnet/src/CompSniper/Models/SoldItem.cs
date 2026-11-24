using System.Text.Json.Serialization;
using CompSniper.Core.Models;
using CompSniper.Core.Validation.Attributes;
using CompSniper.Models.Enums;

namespace CompSniper.Models;

public record SoldItem
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("itemId")]
    public string? ItemId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    public string? Url { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("condition")]
    public string? Condition { get; init; }

    /// <summary>
    /// Best-effort mapping of a known localized eBay condition label.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("conditionId")]
    public int? ConditionId { get; init; }

    /// <summary>
    /// Labeled seller classification on EU marketplaces.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sellerType")]
    public SellerType1? SellerType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("listingType")]
    public ListingType1? ListingType { get; init; }

    /// <summary>
    /// true when eBay marked an accepted Best Offer; null when no accepted-offer marker was detected. eBay does not disclose the accepted amount.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bestOfferAccepted")]
    public bool? BestOfferAccepted { get; init; }

    /// <summary>
    /// Decimal string.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("soldPrice")]
    public string? SoldPrice { get; init; }

    /// <summary>
    /// ISO 4217.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("soldCurrency")]
    public string? SoldCurrency { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shippingPrice")]
    public string? ShippingPrice { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shippingType")]
    public ShippingType? ShippingType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("totalPrice")]
    public string? TotalPrice { get; init; }

    /// <summary>
    /// YYYY-MM-DD sold date.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endedAt")]
    public string? EndedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sellerUsername")]
    public string? SellerUsername { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sellerFeedbackScore")]
    public int? SellerFeedbackScore { get; init; }

    /// <summary>
    /// eBay catalog star rating shown on the result card. This describes the product, not the seller.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("productRating")]
    [Minimum(0.0)]
    [Maximum(5.0)]
    public double? ProductRating { get; init; }

    /// <summary>
    /// Number of eBay catalog ratings behind productRating.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("productReviewCount")]
    [Minimum(0)]
    public int? ProductReviewCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("itemLocation")]
    public string? ItemLocation { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
