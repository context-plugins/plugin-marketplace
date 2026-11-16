using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Core.Validation.Attributes;

namespace FinixApiReference.Models;

public record UpdateSubscriptionBillingCycleDay
{
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

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
