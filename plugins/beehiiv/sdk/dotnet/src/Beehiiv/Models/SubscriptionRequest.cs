using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.Enums;

namespace Beehiiv.Models;

public record SubscriptionRequest
{
    /// <summary>
    /// The email address of the subscription.
    /// </summary>
    [JsonPropertyName("email")]
    public required string Email { get; init; }

    /// <summary>
    /// Whether or not to reactivate the subscription if they have already unsubscribed. This option should be used only if the subscriber is knowingly resubscribing.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reactivate_existing")]
    public bool? ReactivateExisting { get; init; } = false;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("send_welcome_email")]
    public bool? SendWelcomeEmail { get; init; } = false;

    /// <summary>
    /// The source of the subscription.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("utm_source")]
    public string? UtmSource { get; init; }

    /// <summary>
    /// The medium of the subscription
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("utm_medium")]
    public string? UtmMedium { get; init; }

    /// <summary>
    /// The acquisition campaign of the subscription
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("utm_campaign")]
    public string? UtmCampaign { get; init; }

    /// <summary>
    /// The acquisition term; typically the keyword or search term
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("utm_term")]
    public string? UtmTerm { get; init; }

    /// <summary>
    /// The acquisition content; typically used for A/B testing or ad variations
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("utm_content")]
    public string? UtmContent { get; init; }

    /// <summary>
    /// The website that the subscriber was referred from
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("referring_site")]
    public string? ReferringSite { get; init; }

    /// <summary>
    /// This should be a subscribers referral_code. This gives referral credit for the new subscription.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("referral_code")]
    public string? ReferralCode { get; init; }

    /// <summary>
    /// The custom fields must already exist for the publication. Any new custom fields here will be discarded.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("custom_fields")]
    public IReadOnlyList<CustomFieldValue>? CustomFields { get; init; }

    /// <summary>
    /// Override the publication's default double opt-in settings for this subscription. Possible values are:
    /// - "on" — The subscriber will receive a double opt-in confirmation email and will need to confirm their subscription prior to being marked as active.
    /// - "off" — The subscriber will be marked as active immediately and will not receive a double opt-in confirmation email.
    /// - "not_set" — The publication's default double opt-in settings will be applied to this subscription.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("double_opt_override")]
    public string? DoubleOptOverride { get; init; }

    /// <summary>
    /// The tier for this subscription.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tier")]
    public SubscriptionsCreateRequestTier? Tier { get; init; }

    /// <summary>
    /// An array of premium tier names to assign to this subscription. When provided, the subscription will be assigned to premium tiers matching these names. Can be combined with <c>premium_tier_ids</c> to include tiers from both (duplicates are removed). Takes precedence over the <c>tier</c> parameter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("premium_tiers")]
    public IReadOnlyList<string>? PremiumTiers { get; init; }

    /// <summary>
    /// An array of premium tier IDs to assign to this subscription. When provided, the subscription will be assigned to these specific premium tiers. Can be combined with <c>premium_tiers</c> to include tiers from both (duplicates are removed). Takes precedence over the <c>tier</c> parameter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("premium_tier_ids")]
    public IReadOnlyList<string>? PremiumTierIds { get; init; }

    /// <summary>
    /// The Stripe customer ID for this subscription.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stripe_customer_id")]
    public string? StripeCustomerId { get; init; }

    /// <summary>
    /// Enroll the subscriber into automations after their subscription has been created. Requires the automations to have an active *Add by API* trigger.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("automation_ids")]
    public IReadOnlyList<string>? AutomationIds { get; init; }

    /// <summary>
    /// An array of newsletter list prefixed IDs to subscribe the new subscription to. The newsletter lists must belong to the same publication.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("newsletter_list_ids")]
    public IReadOnlyList<string>? NewsletterListIds { get; init; }

    /// <summary>
    /// When true, the subscriber will not be auto-subscribed to newsletter lists configured with auto-subscribe. Defaults to false.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("skip_newsletter_list_auto_subscribe")]
    public bool? SkipNewsletterListAutoSubscribe { get; init; }

    /// <summary>
    /// The prefixed ID of a complimentary access object to apply to this subscription. The complimentary access must belong to the same publication.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("complimentary_gift_id")]
    public string? ComplimentaryGiftId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
