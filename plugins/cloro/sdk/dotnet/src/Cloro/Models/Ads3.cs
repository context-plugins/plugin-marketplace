using System.Collections.Generic;
using System.Text.Json.Serialization;
using Cloro.Core.Models;
using Cloro.Core.Validation;
using Cloro.Core.Validation.Attributes;
using Cloro.Models.Enums;

namespace Cloro.Models;

public record Ads3
{
    /// <summary>
    /// Position within the ad block (1-indexed)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("position")]
    public double? Position { get; init; }

    /// <summary>
    /// Where the ad appeared on the SERP. <c>top</c>/<c>bottom</c> are text-ad blocks, <c>middle</c> covers direct/in-content ads, <c>rhs</c> is the right-hand-side sponsored-products carousel.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("blockPosition")]
    public BlockPosition? BlockPosition { get; init; }

    /// <summary>
    /// Discriminates plain text ads (<c>RESULT</c>) from shopping-style sponsored cards (<c>SHOPPING_CARD</c>). Shopping cards appear in the right-hand-side PLA carousel, the top-of-page PLA carousel, and the top-of-page sponsored shopping-card carousels (vehicles, products, hotels, …).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type1? Type { get; init; }

    /// <summary>
    /// Ad title
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// Destination URL of the ad. For <c>type: SHOPPING_CARD</c> items this is a Google <c>aclk?</c>-redirected URL.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public string? Url { get; init; }

    /// <summary>
    /// Page number where the ad was found
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("page")]
    public double? Page { get; init; }

    /// <summary>
    /// Formatted URL as displayed in the ad
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayedUrl")]
    public string? DisplayedUrl { get; init; }

    /// <summary>
    /// Domain name of the advertiser
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("domain")]
    public string? Domain { get; init; }

    /// <summary>
    /// Ad description text. For <c>type: RESULT</c> items this is classic ad copy. For <c>type: SHOPPING_CARD</c> items it carries category-specific subtitle fragments joined with <c>·</c> (e.g. vehicle condition + city: <c>Used - 94k miles · Greeley</c>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Carousel header label for shopping-card ads. Examples observed today include <c>Sponsored products</c>, <c>Sponsored vehicles</c>, and <c>Sponsored hotels</c>. Omitted for <c>type: RESULT</c> text ads.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("category")]
    public string? Category { get; init; }

    /// <summary>
    /// Product price for <c>type: SHOPPING_CARD</c> ads. <c>currency</c> and <c>raw</c> are always present; <c>value</c> is omitted when the number doesn't parse, and the whole object is omitted when no currency appears beside a number. <c>raw</c> carries the visible text verbatim (e.g. <c>"$0 down with 24 monthly payments"</c> on installment offers) so consumers can disambiguate genuine zero prices from down-payment labels.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("price")]
    public Price3? Price { get; init; }

    /// <summary>
    /// Original price before discount on <c>type: SHOPPING_CARD</c> ads that surface MSRP / sale messaging. Same shape as <c>price</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("oldPrice")]
    public OldPrice1? OldPrice { get; init; }

    /// <summary>
    /// Merchant/dealer name attached to a <c>type: SHOPPING_CARD</c> ad.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("store")]
    public string? Store { get; init; }

    /// <summary>
    /// Hero image URL served by Google's <c>encrypted-tbn</c> CDN for <c>type: SHOPPING_CARD</c> ads. Omitted when the lazy-image chain cannot resolve a non-placeholder source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("imageUrl")]
    [Format(FormatKind.Uri)]
    public string? ImageUrl { get; init; }

    /// <summary>
    /// Sitelinks displayed under the ad
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sitelinks")]
    public IReadOnlyList<Sitelinks1>? Sitelinks { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
