using System.Collections.Generic;
using System.Text.Json.Serialization;
using CompSniper.Core.Models;

namespace CompSniper.Models;

public record ItemCompSniperMarketplaceAndShippingPoshmarkApi
{
    /// <summary>
    /// Poshmark listing ID (24-char hex)
    /// </summary>
    [JsonPropertyName("listingId")]
    public required string ListingId { get; init; }

    [JsonPropertyName("url")]
    public required string Url { get; init; }

    [JsonPropertyName("title")]
    public required string Title { get; init; }

    /// <summary>
    /// Sale price in USD
    /// </summary>
    [JsonPropertyName("soldPrice")]
    public required double? SoldPrice { get; init; }

    /// <summary>
    /// Original listing price in USD
    /// </summary>
    [JsonPropertyName("originalPrice")]
    public required double? OriginalPrice { get; init; }

    /// <summary>
    /// Reserved for item-level shipping evidence. null when Poshmark does not expose it.
    /// </summary>
    [JsonPropertyName("shippingCost")]
    public required double? ShippingCost { get; init; }

    [JsonPropertyName("brand")]
    public required string? Brand { get; init; }

    [JsonPropertyName("size")]
    public required string? Size { get; init; }

    /// <summary>
    /// Department &gt; Category path.
    /// </summary>
    [JsonPropertyName("category")]
    public required string? Category { get; init; }

    /// <summary>
    /// Item condition from Poshmark API.
    /// </summary>
    [JsonPropertyName("condition")]
    public required string? Condition { get; init; }

    /// <summary>
    /// New With Tags flag
    /// </summary>
    [JsonPropertyName("nwt")]
    public required bool Nwt { get; init; }

    /// <summary>
    /// Color names from Poshmark API.
    /// </summary>
    [JsonPropertyName("colors")]
    public required IReadOnlyList<string> Colors { get; init; }

    /// <summary>
    /// Full listing description text.
    /// </summary>
    [JsonPropertyName("description")]
    public required string? Description { get; init; }

    /// <summary>
    /// Public ISO timestamp when Poshmark marked the item sold.
    /// </summary>
    [JsonPropertyName("soldAt")]
    public required string? SoldAt { get; init; }

    /// <summary>
    /// ISO timestamp when the item was first published.
    /// </summary>
    [JsonPropertyName("listedAt")]
    public required string? ListedAt { get; init; }

    /// <summary>
    /// Days between listedAt and soldAt. null when either date is missing.
    /// </summary>
    [JsonPropertyName("daysToSell")]
    public required double? DaysToSell { get; init; }

    [JsonPropertyName("likesCount")]
    public required double? LikesCount { get; init; }

    /// <summary>
    /// Public comment count when exposed by Poshmark search.
    /// </summary>
    [JsonPropertyName("commentsCount")]
    public required double? CommentsCount { get; init; }

    /// <summary>
    /// Public share count when exposed by Poshmark search.
    /// </summary>
    [JsonPropertyName("shareCount")]
    public required double? ShareCount { get; init; }

    [JsonPropertyName("sellerUsername")]
    public required string? SellerUsername { get; init; }

    /// <summary>
    /// Seller city + state. Requires enrich=true.
    /// </summary>
    [JsonPropertyName("sellerLocation")]
    public required string? SellerLocation { get; init; }

    /// <summary>
    /// Approximate public seller sold count. Requires enrich=true.
    /// </summary>
    [JsonPropertyName("sellerSoldCount")]
    public required double? SellerSoldCount { get; init; }

    /// <summary>
    /// Seller's average ship time in days. Requires enrich=true.
    /// </summary>
    [JsonPropertyName("sellerAvgShipTime")]
    public required double? SellerAvgShipTime { get; init; }

    /// <summary>
    /// Listing thumbnail URL
    /// </summary>
    [JsonPropertyName("thumbnailUrl")]
    public required string? ThumbnailUrl { get; init; }

    /// <summary>
    /// ISO timestamp when the listing was scraped
    /// </summary>
    [JsonPropertyName("scrapedAt")]
    public required string ScrapedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
