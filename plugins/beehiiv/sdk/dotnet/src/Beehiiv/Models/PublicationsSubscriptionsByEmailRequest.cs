using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.Enums;

namespace Beehiiv.Models;

public record PublicationsSubscriptionsByEmailRequest
{
    /// <summary>
    /// The new email address for the subscription
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    public string? Email { get; init; }

    /// <summary>
    /// Optional parameter to set the tier for this subscription.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tier")]
    public SubscriptionsPutRequestSubscriptionsItemTier1? Tier { get; init; }

    /// <summary>
    /// An array of premium tier IDs to assign to this subscription. When provided, the subscription will be assigned to these specific premium tiers. Can be combined with <c>premium_tiers</c> to include tiers from both (duplicates are removed). Takes precedence over the <c>tier</c> parameter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("premium_tier_ids")]
    public IReadOnlyList<string>? PremiumTierIds { get; init; }

    /// <summary>
    /// An array of premium tier names to assign to this subscription. When provided, the subscription will be assigned to premium tiers matching these names. Can be combined with <c>premium_tier_ids</c> to include tiers from both (duplicates are removed). Takes precedence over the <c>tier</c> parameter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("premium_tiers")]
    public IReadOnlyList<string>? PremiumTiers { get; init; }

    /// <summary>
    /// The Stripe Customer ID of the subscription (not required)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stripe_customer_id")]
    public string? StripeCustomerId { get; init; }

    /// <summary>
    /// A boolean value specifying whether to unsubscribe this subscription from the publication (not required)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unsubscribe")]
    public bool? Unsubscribe { get; init; }

    /// <summary>
    /// An array of custom field objects to update
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("custom_fields")]
    public IReadOnlyList<SubscriptionsPutRequestSubscriptionsItemCustomFieldsItem>? CustomFields { get; init; }

    /// <summary>
    /// The prefixed ID of a complimentary access object to apply to this subscription. The complimentary access must belong to the same publication.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("complimentary_gift_id")]
    public string? ComplimentaryGiftId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
