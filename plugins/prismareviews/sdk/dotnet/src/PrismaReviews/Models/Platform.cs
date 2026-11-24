using System.Collections.Generic;
using System.Text.Json.Serialization;
using PrismaReviews.Core.Models;
using PrismaReviews.Core.Validation;
using PrismaReviews.Core.Validation.Attributes;
using PrismaReviews.Models.Enums;

namespace PrismaReviews.Models;

/// <summary>
/// How a platform connects and whether this workspace can connect it now.
/// </summary>
public record Platform
{
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
    [JsonPropertyName("id")]
    public required PlatformId Id { get; init; }

    /// <summary>
    /// Display name.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// How <c>POST /v1/connections</c> connects it.
    /// </summary>
    [JsonPropertyName("connect")]
    public required Connect Connect { get; init; }

    /// <summary>
    /// <c>api</c>: Prisma publishes replies. <c>read</c>: read only.
    /// </summary>
    [JsonPropertyName("reply")]
    public required Reply Reply { get; init; }

    /// <summary>
    /// Whether your plan (or its read packs) includes it.
    /// </summary>
    [JsonPropertyName("in_your_plan")]
    public required bool InYourPlan { get; init; }

    /// <summary>
    /// Whether it is enabled for your account (some platforms open gradually).
    /// </summary>
    [JsonPropertyName("available")]
    public required bool Available { get; init; }

    /// <summary>
    /// <c>false</c> while it can only be tried with test keys; a live <c>POST /v1/connections</c> returns <c>501 platform_not_available</c>.
    /// </summary>
    [JsonPropertyName("live_ready")]
    public required bool LiveReady { get; init; }

    /// <summary>
    /// Why it isn't ready for live keys yet.
    /// </summary>
    [JsonPropertyName("live_note")]
    public required string? LiveNote { get; init; }

    /// <summary>
    /// What the account owner needs before starting.
    /// </summary>
    [JsonPropertyName("summary")]
    public required string Summary { get; init; }

    /// <summary>
    /// Short setup steps for the account owner.
    /// </summary>
    [JsonPropertyName("steps")]
    public required IReadOnlyList<string> Steps { get; init; }

    /// <summary>
    /// Where the values come from.
    /// </summary>
    [JsonPropertyName("console_url")]
    [Format(FormatKind.Uri)]
    public required string? ConsoleUrl { get; init; }

    /// <summary>
    /// What <c>POST /v1/connections</c> expects.
    /// </summary>
    [JsonPropertyName("fields")]
    public required IReadOnlyList<ConnectField> Fields { get; init; }

    /// <summary>
    /// A request body for <c>POST /v1/connections</c> that works with a test key.
    /// </summary>
    [JsonPropertyName("example")]
    public required object Example { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
