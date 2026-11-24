using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.Enums;

namespace Beehiiv.Models;

public record SubscriptionsPatchRequestSubscriptionsItem
{
    /// <summary>
    /// The prefixed ID of the subscription.
    /// </summary>
    [JsonPropertyName("subscription_id")]
    public required string SubscriptionId { get; init; }

    /// <summary>
    /// The Tier of the Subscription (not required)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tier")]
    public SubscriptionsPatchRequestSubscriptionsItemTier? Tier { get; init; }

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
    public IReadOnlyList<SubscriptionsPatchRequestSubscriptionsItemCustomFieldsItem>? CustomFields { get; init; }

    /// <summary>
    /// The prefixed ID of a complimentary access object to apply to this subscription. The complimentary access must belong to the same publication.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("complimentary_gift_id")]
    public string? ComplimentaryGiftId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
