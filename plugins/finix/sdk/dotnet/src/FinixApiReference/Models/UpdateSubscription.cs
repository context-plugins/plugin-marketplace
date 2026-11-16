using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Core.Validation.Attributes;

namespace FinixApiReference.Models;

public record UpdateSubscription
{
    /// <summary>
    /// The total amount that will be debited in cents (e.g. 100 cents to debit $1.00). This field can be updated only for subscriptions *not* created from subscription plans.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount")]
    public long? Amount { get; init; }

    /// <summary>
    /// The day of the month on which the <c>Subscription</c> is billed. Only applies to subscriptions with a monthly billing cycle (e.g., <c>MONTHLY</c>, <c>BIMONTHLY</c>, <c>QUARTERLY</c>, <c>SEMIYEARLY</c>, <c>YEARLY</c>, <c>BIYEARLY</c>, <c>TRIYEARLY</c>).
    /// <para>
    /// If the specified day doesn't exist in a given month (e.g., April 31), the subscription is billed on the last valid day of that month.
    /// </para>
    /// <para>
    /// Accepted values are 1 to 31.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billing_cycle_day")]
    [Minimum(1)]
    [Maximum(31)]
    public int? BillingCycleDay { get; init; }

    /// <summary>
    /// An object containing details about the buyer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buyer_details")]
    public BuyerDetails3? BuyerDetails { get; init; }

    /// <summary>
    /// A human-readable name for the resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nickname")]
    public string? Nickname { get; init; }

    /// <summary>
    /// An object containing subscription details.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subscription_details")]
    public SubscriptionDetails9? SubscriptionDetails { get; init; }

    /// <summary>
    /// Include up to 50 <c>key: value</c> pairs to annotate requests with custom metadata.
    /// - Maximum character length for individual <c>keys</c> is 40.
    /// - Maximum character length for individual <c>values</c> is 500.
    /// (For example, <c>order_number: 25</c>, <c>item_type: produce</c>, <c>department: sales</c>)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public object? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
