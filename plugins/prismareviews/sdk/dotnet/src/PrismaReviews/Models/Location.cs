using System;
using System.Text.Json.Serialization;
using PrismaReviews.Core.Models;
using PrismaReviews.Models.AnyOf;
using PrismaReviews.Models.Enums;

namespace PrismaReviews.Models;

/// <summary>
/// One thing that receives reviews on one platform: a place, an app, a shop, a listing.
/// </summary>
public record Location
{
    /// <summary>
    /// Location ID (<c>loc_…</c>).
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
    /// The connection that created it (<c>con_…</c>).
    /// </summary>
    [JsonPropertyName("connection_id")]
    public required string ConnectionId { get; init; }

    /// <summary>
    /// Name on the platform. For listing URL platforms, the listing URL.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Address for places. For App Store apps, the bundle ID.
    /// </summary>
    [JsonPropertyName("address")]
    public required string? Address { get; init; }

    /// <summary>
    /// Public page of the location, app or listing, when known.
    /// </summary>
    [JsonPropertyName("url")]
    public required string? Url { get; init; }

    /// <summary>
    /// The platform's own ID.
    /// </summary>
    [JsonPropertyName("external_id")]
    public required string ExternalId { get; init; }

    [JsonPropertyName("status")]
    public required StatusPrismaReviewsLocationsApi Status { get; init; }

    /// <summary>
    /// Last time Prisma checked it for reviews. <c>null</c> until the first sync finishes.
    /// </summary>
    [JsonPropertyName("last_synced_at")]
    public required DateTimeOffset? LastSyncedAt { get; init; }

    /// <summary>
    /// When the next check is scheduled. <c>null</c> once disconnected.
    /// </summary>
    [JsonPropertyName("next_sync_at")]
    public required DateTimeOffset? NextSyncAt { get; init; }

    /// <summary>
    /// The link to send customers to ask for a review (email, SMS, QR code). <c>type: "write_review"</c> opens the platform's review form; <c>listing</c> is the public page with its review button. <c>null</c> where only verified buyers or guests can review (Booking.com, eBay, Etsy, shop-review apps).
    /// </summary>
    [JsonPropertyName("review_link")]
    public required ReviewLink1 ReviewLink { get; init; }

    /// <summary>
    /// Sync health: tells "no new reviews" apart from "the check failed". After 3 failed checks in a row Prisma sends <c>location.sync_failed</c>, and <c>location.sync_recovered</c> on the next successful one.
    /// </summary>
    [JsonPropertyName("sync")]
    public required Sync Sync { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
