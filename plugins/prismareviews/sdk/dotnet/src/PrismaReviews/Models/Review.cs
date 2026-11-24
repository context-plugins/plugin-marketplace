using System;
using System.Text.Json.Serialization;
using PrismaReviews.Core.Models;
using PrismaReviews.Core.Validation;
using PrismaReviews.Core.Validation.Attributes;
using PrismaReviews.Models.Enums;

namespace PrismaReviews.Models;

/// <summary>
/// One customer review, in the same shape on every platform.
/// </summary>
public record Review
{
    /// <summary>
    /// Review ID (<c>rev_…</c>).
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Platform ID.
    /// <para>
    /// | ID | Platform | Connects with | Replies |
    /// | --- | --- | --- | --- |
    /// | <c>google</c> | Google Business Profile | oauth | by API |
    /// | <c>app_store</c> | App Store | credentials | by API |
    /// | <c>google_play</c> | Google Play | credentials | by API |
    /// | <c>judge_me</c> | Judge.me | credentials | by API |
    /// | <c>trustpilot</c> | Trustpilot | oauth | by API |
    /// | <c>google_maps</c> | Google Maps | listing_url | read only |
    /// | <c>yelp</c> | Yelp | listing_url | read only |
    /// | <c>tripadvisor</c> | Tripadvisor | listing_url | read only |
    /// | <c>booking</c> | Booking.com | listing_url | read only |
    /// | <c>yotpo</c> | Yotpo | credentials | read only |
    /// | <c>reviews_io</c> | REVIEWS.io | credentials | read only |
    /// | <c>g2</c> | G2 | credentials | read only |
    /// | <c>ebay</c> | eBay | oauth | by API |
    /// | <c>etsy</c> | Etsy | listing_url | read only |
    /// | <c>steam</c> | Steam | listing_url | read only |
    /// | <c>okendo</c> | Okendo | credentials | read only |
    /// | <c>feefo</c> | Feefo | credentials | read only |
    /// | <c>trusted_shops</c> | Trusted Shops | credentials | by API |
    /// | <c>ekomi</c> | eKomi | credentials | by API |
    /// | <c>loox</c> | Loox | credentials | read only |
    /// | <c>proven_expert</c> | ProvenExpert | credentials | read only |
    /// | <c>shopper_approved</c> | Shopper Approved | credentials | read only |
    /// | <c>wordpress</c> | WordPress.org | listing_url | read only |
    /// | <c>appexchange</c> | Salesforce AppExchange | listing_url | read only |
    /// | <c>facebook</c> | Facebook | listing_url | read only |
    /// | <c>opentable</c> | OpenTable | listing_url | read only |
    /// | <c>doordash</c> | DoorDash | listing_url | read only |
    /// | <c>angi</c> | Angi | listing_url | read only |
    /// | <c>checkatrade</c> | Checkatrade | listing_url | read only |
    /// | <c>avvo</c> | Avvo | listing_url | read only |
    /// | <c>capterra</c> | Capterra | listing_url | read only |
    /// | <c>apartments</c> | Apartments.com | listing_url | read only |
    /// | <c>gartner</c> | Gartner Peer Insights | listing_url | read only |
    /// | <c>healthgrades</c> | Healthgrades | listing_url | read only |
    /// | <c>vitals</c> | Vitals | listing_url | read only |
    /// | <c>classpass</c> | ClassPass | listing_url | read only |
    /// </para>
    /// </summary>
    [JsonPropertyName("platform")]
    public required PlatformId Platform { get; init; }

    /// <summary>
    /// The location the review belongs to (<c>loc_…</c>).
    /// </summary>
    [JsonPropertyName("location_id")]
    public required string LocationId { get; init; }

    /// <summary>
    /// 1 to 5 stars. <c>null</c> if the platform gave no rating.
    /// </summary>
    [JsonPropertyName("rating")]
    [Minimum(1)]
    [Maximum(5)]
    public required int? Rating { get; init; }

    /// <summary>
    /// Review title, on platforms that have one.
    /// </summary>
    [JsonPropertyName("title")]
    public required string? Title { get; init; }

    /// <summary>
    /// Review body. <c>null</c> for rating-only reviews.
    /// </summary>
    [JsonPropertyName("text")]
    public required string? Text { get; init; }

    /// <summary>
    /// Display name as shown by the platform.
    /// </summary>
    [JsonPropertyName("author")]
    public required string? Author { get; init; }

    /// <summary>
    /// Language code when the platform provides one.
    /// </summary>
    [JsonPropertyName("language")]
    public required string? Language { get; init; }

    /// <summary>
    /// Public link to the review when the platform provides one. On read-only platforms, where to answer it.
    /// </summary>
    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public required string? Url { get; init; }

    /// <summary>
    /// When the review was written on the platform.
    /// </summary>
    [JsonPropertyName("created_at")]
    public required DateTimeOffset CreatedAt { get; init; }

    /// <summary>
    /// When it was last edited on the platform.
    /// </summary>
    [JsonPropertyName("updated_at")]
    public required DateTimeOffset UpdatedAt { get; init; }

    /// <summary>
    /// The business reply, or <c>null</c>.
    /// </summary>
    [JsonPropertyName("reply")]
    public required ReplyPrismaReviewsRepliesApi? Reply { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
