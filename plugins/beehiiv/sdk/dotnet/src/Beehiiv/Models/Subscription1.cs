using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Core.Validation;
using Beehiiv.Core.Validation.Attributes;
using Beehiiv.Models.Enums;

namespace Beehiiv.Models;

/// <summary>
/// The Subscription object matching the email address for this publication.  Only present when <c>expand</c> includes <c>subscription</c> or <c>subscription_custom_fields</c>.
/// </summary>
public record Subscription1
{
    /// <summary>
    /// The prefixed subscription id
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("email")]
    [Format(FormatKind.Email)]
    public required string Email { get; init; }

    /// <summary>
    /// The status of the subscription.&lt;br&gt;<c>validating</c> - The email address is being validated.&lt;br&gt;<c>invalid</c> - The email address is invalid.&lt;br&gt;<c>pending</c> - The email address is valid, but the subscription is pending double opt-in.&lt;br&gt;<c>active</c> - The email was valid and the subscription is active.&lt;br&gt;<c>inactive</c> - The subscription was made inactive, possibly due to an unsubscribe.&lt;br&gt;<c>needs_attention</c> - The subscription requires approval or denial.
    /// </summary>
    [JsonPropertyName("status")]
    public required SubscriptionExpandedStatus1 Status { get; init; }

    /// <summary>
    /// The date the subscription was created. Measured in seconds since the Unix epoch
    /// </summary>
    [JsonPropertyName("created")]
    public required int Created { get; init; }

    /// <summary>
    /// The current tier of the subscription.
    /// </summary>
    [JsonPropertyName("subscription_tier")]
    public required SubscriptionExpandedSubscriptionTier SubscriptionTier { get; init; }

    /// <summary>
    /// The current premium tiers of the subscription. Empty if the subscriber is not associated with any premium tiers.
    /// </summary>
    [JsonPropertyName("subscription_premium_tier_names")]
    public required IReadOnlyList<string> SubscriptionPremiumTierNames { get; init; }

    /// <summary>
    /// The acquisition source; where the subscriber came from
    /// </summary>
    [JsonPropertyName("utm_source")]
    public required string UtmSource { get; init; }

    /// <summary>
    /// The acquisition medium; how the subscriber got to your publication
    /// </summary>
    [JsonPropertyName("utm_medium")]
    public required string UtmMedium { get; init; }

    /// <summary>
    /// The acquisition channel
    /// </summary>
    [JsonPropertyName("utm_channel")]
    public required SubscriptionExpandedUtmChannel UtmChannel { get; init; }

    /// <summary>
    /// The acquisition campaign
    /// </summary>
    [JsonPropertyName("utm_campaign")]
    public required string UtmCampaign { get; init; }

    /// <summary>
    /// The acquisition term; typically the keyword or search term
    /// </summary>
    [JsonPropertyName("utm_term")]
    public required string UtmTerm { get; init; }

    /// <summary>
    /// The acquisition content; typically used for A/B testing or ad variations
    /// </summary>
    [JsonPropertyName("utm_content")]
    public required string UtmContent { get; init; }

    /// <summary>
    /// The website that the subscriber was referred from
    /// </summary>
    [JsonPropertyName("referring_site")]
    public required string ReferringSite { get; init; }

    /// <summary>
    /// The code associated to this subscriber to refer others. When a new subscription is created with this referral code, credit for the referral goes to this subscription.
    /// </summary>
    [JsonPropertyName("referral_code")]
    public required string ReferralCode { get; init; }

    /// <summary>
    /// Optional list of tiers for a subscription. Retrievable by including <c>expand: [subscription_premium_tiers]</c> in the request body.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subscription_premium_tiers")]
    public IReadOnlyList<SubscriptionTierInfo>? SubscriptionPremiumTiers { get; init; }

    /// <summary>
    /// Optional list of custom fields for a subscription. Retrievable by including <c>expand: [custom_field]</c> in the request body.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("custom_fields")]
    public IReadOnlyList<CustomField>? CustomFields { get; init; }

    /// <summary>
    /// Optional list of tags for a subscription. Retrievable by including <c>expand: [tags]</c> in the request body.
    /// Max limit of 100 unique tags per publication.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<string>? Tags { get; init; }

    /// <summary>
    /// Optional list of stats for a subscription. Retrievable by including <c>expand: [stats]</c> in the request body.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stats")]
    public SubscriptionStats? Stats { get; init; }

    /// <summary>
    /// The prefixed IDs of the newsletter lists this subscription is actively subscribed to. Requires <c>expand[]=newsletter_lists</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("newsletter_list_ids")]
    public IReadOnlyList<string>? NewsletterListIds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
