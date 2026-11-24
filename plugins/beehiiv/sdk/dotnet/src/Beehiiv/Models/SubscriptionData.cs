using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.Enums;

namespace Beehiiv.Models;

public record SubscriptionData
{
    /// <summary>
    /// The time the subscription was created. Measured in seconds since the Unix epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created")]
    public int? Created { get; init; }

    /// <summary>
    /// The email address of the subscription.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    public string? Email { get; init; }

    /// <summary>
    /// The prefixed ID of the subscription.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// The code associated to this subscriber to refer others. When a new subscription is created with this referral code, credit for the referral goes to this subscription.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("referral_code")]
    public string? ReferralCode { get; init; }

    /// <summary>
    /// The website that the subscriber was referred from.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("referring_site")]
    public string? ReferringSite { get; init; }

    /// <summary>
    /// The status of the subscription.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public SubscriptionDataStatus? Status { get; init; }

    /// <summary>
    /// The tier of the subscription.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subscription_tier")]
    public string? SubscriptionTier { get; init; }

    /// <summary>
    /// The names of the premium tiers associated with the subscription.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subscription_premium_tier_names")]
    public IReadOnlyList<string>? SubscriptionPremiumTierNames { get; init; }

    /// <summary>
    /// The Stripe customer ID associated with the subscription.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stripe_customer_id")]
    public string? StripeCustomerId { get; init; }

    /// <summary>
    /// The acquisition campaign that the subscriber was acquired from.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("utm_campaign")]
    public string? UtmCampaign { get; init; }

    /// <summary>
    /// The channel that the subscriber was acquired from.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("utm_channel")]
    public string? UtmChannel { get; init; }

    /// <summary>
    /// The medium that the subscriber was acquired from.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("utm_medium")]
    public string? UtmMedium { get; init; }

    /// <summary>
    /// The source that the subscriber was acquired from.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("utm_source")]
    public string? UtmSource { get; init; }

    /// <summary>
    /// An array of custom field values that have been set on the subscription. Each custom field value includes the field name, kind (type), and formatted value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("custom_fields")]
    public IReadOnlyList<CustomFieldValueBeehiivWebhooksApi>? CustomFields { get; init; }

    /// <summary>
    /// An array of tag names that have been applied to the subscription.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<string>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
