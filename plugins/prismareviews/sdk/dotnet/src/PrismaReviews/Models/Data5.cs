using System.Text.Json.Serialization;
using PrismaReviews.Core.Models;
using PrismaReviews.Models.Enums;

namespace PrismaReviews.Models;

public record Data5
{
    /// <summary>
    /// Connection ID.
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

    [JsonPropertyName("status")]
    public required StatusPrismaReviewsWebhooksApi Status { get; init; }

    /// <summary>
    /// When it became <c>active</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("locations_created")]
    public int? LocationsCreated { get; init; }

    /// <summary>
    /// When it became <c>reauth_required</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reason")]
    public string? Reason { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
