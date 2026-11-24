using System.Collections.Generic;
using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

/// <summary>
/// Individual product information
/// </summary>
public record ShoppingProduct
{
    /// <summary>
    /// Product name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// 1-indexed rank across all products in all shopping cards in the response (flat, not reset per card).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("position")]
    public int? Position { get; init; }

    /// <summary>
    /// Product page URL
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    public string? Url { get; init; }

    /// <summary>
    /// Product description
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Current price
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("price")]
    public string? Price { get; init; }

    /// <summary>
    /// Product category or style tag
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("featured_tag")]
    public string? FeaturedTag { get; init; }

    /// <summary>
    /// Product rating (0-5)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rating")]
    public double? Rating { get; init; }

    /// <summary>
    /// Number of reviews
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("num_reviews")]
    public int? NumReviews { get; init; }

    /// <summary>
    /// Product image URLs
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("image_urls")]
    public IReadOnlyList<string>? ImageUrls { get; init; }

    /// <summary>
    /// Product identifier
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// Product variants (size, color, etc.)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("variants")]
    public object? Variants { get; init; }

    /// <summary>
    /// Shopping offers with pricing details from different merchants
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("offers")]
    public IReadOnlyList<ShoppingOffer>? Offers { get; init; }

    /// <summary>
    /// Rating source information with supporting websites
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rating_grouped_citation")]
    public RatingGroupedCitation? RatingGroupedCitation { get; init; }

    /// <summary>
    /// Data provider identifier
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("provider")]
    public string? Provider { get; init; }

    /// <summary>
    /// List of data providers
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("providers")]
    public IReadOnlyList<string>? Providers { get; init; }

    /// <summary>
    /// Key used to look up product updates
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("product_lookup_key")]
    public ProductLookupKey? ProductLookupKey { get; init; }

    /// <summary>
    /// Structured product lookup query data
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("product_lookup_data")]
    public ProductLookupData? ProductLookupData { get; init; }

    /// <summary>
    /// Visual showcase metadata attached to a shopping product (image, background, and per-slot placement).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("showcase_metadata")]
    public ShowcaseMetadata? ShowcaseMetadata { get; init; }

    /// <summary>
    /// Whether to show price disclosure
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("show_price_disclosure")]
    public bool? ShowPriceDisclosure { get; init; }

    /// <summary>
    /// Analytics metadata
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("analytics_meta")]
    public AnalyticsMeta? AnalyticsMeta { get; init; }

    /// <summary>
    /// Sources of product metadata
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata_sources")]
    public IReadOnlyList<string>? MetadataSources { get; init; }

    /// <summary>
    /// UUID for product event tracking
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("product_event_uuid")]
    public string? ProductEventUuid { get; init; }

    /// <summary>
    /// Broad shopping query ChatGPT generated for this product (extracted from product_lookup_key.data). Useful for understanding the search intent behind the recommendation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("generatedProductQuery")]
    public string? GeneratedProductQuery { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
