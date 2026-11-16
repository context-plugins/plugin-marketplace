using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record CreateSubscriptionPlan
{
    /// <summary>
    /// The total amount that will be debited in cents (e.g. 100 cents to debit $1.00).
    /// </summary>
    [JsonPropertyName("amount")]
    public required long Amount { get; init; }

    /// <summary>
    /// Object containing default billing settings.
    /// </summary>
    [JsonPropertyName("billing_defaults")]
    public required BillingDefaults1 BillingDefaults { get; init; }

    /// <summary>
    /// How often the buyer is billed. The possible billing intervals are as follows:
    /// <list type="bullet">
    ///   <item><description><c>BIMONTHLY</c>: every 2 months</description></item>
    ///   <item><description><c>BIWEEKLY</c>: every 2 weeks</description></item>
    ///   <item><description><c>BIYEARLY</c>: every 2 years</description></item>
    ///   <item><description><c>DAILY</c>: every day</description></item>
    ///   <item><description><c>MONTHLY</c>: every month</description></item>
    ///   <item><description><c>QUARTERLY</c>: each quarter</description></item>
    ///   <item><description><c>SEMIYEARLY</c>: twice a year</description></item>
    ///   <item><description><c>TRIYEARLY</c>: every 3 years</description></item>
    ///   <item><description><c>WEEKLY</c>: every week</description></item>
    ///   <item><description><c>YEARLY</c>: every year</description></item>
    /// </list>
    /// </summary>
    [JsonPropertyName("billing_interval")]
    public required BillingInterval BillingInterval { get; init; }

    /// <summary>
    /// ISO 4217 3-letter currency code. Currently, the only <c>currency</c> supported is <c>USD</c>.
    /// </summary>
    [JsonPropertyName("currency")]
    public string Currency { get; } = "USD";

    /// <summary>
    /// The total number of billing intervals for subscriptions created from this plan. This is the count of recurring billing cycles, with the interval unit defined by the plan’s <c>billing_interval</c>, such as weekly, monthly, etc. If included, the plan’s <c>duration_type</c> will be set to <c>FIXED_TERM</c>.
    /// <para>
    /// Subscriptions created with this plan will use the default duration in the <c>total_billing_intervals</c> field. The subscription's <c>expires_at</c> field will be set to the datetime when the subscription expires based on the plan's <c>default_total_billing_intervals</c>.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("default_total_billing_intervals")]
    public int? DefaultTotalBillingIntervals { get; init; }

    /// <summary>
    /// A description of the <c>Subscription Plan</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("discount_phase_defaults")]
    public DiscountPhaseDefaults1? DiscountPhaseDefaults { get; init; }

    /// <summary>
    /// The ID of the <see href="#Merchants"><c>Merchant</c></see> resource that you wish to link to the <c>Subscription Plan</c> (i.e., the merchant that the subscription plan belongs to).
    /// <para>
    /// At this time, only approved merchants with one of the following processors are valid:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>DUMMY_V1</c></description></item>
    ///   <item><description><c>FINIX_V1</c></description></item>
    /// </list>
    /// </summary>
    [JsonPropertyName("linked_to")]
    public required string LinkedTo { get; init; }

    /// <summary>
    /// The type of the resource that is specified in the <c>linked_to</c> field.
    /// </summary>
    [JsonPropertyName("linked_type")]
    public string LinkedType { get; } = "MERCHANT";

    /// <summary>
    /// A human-readable name for the resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nickname")]
    public string? Nickname { get; init; }

    /// <summary>
    /// A human-friendly name for the <c>Subscription Plan</c>.
    /// </summary>
    [JsonPropertyName("plan_name")]
    public required string PlanName { get; init; }

    /// <summary>
    /// Include up to 50 <c>key: value</c> pairs to annotate requests with custom metadata.
    /// - Maximum character length for individual <c>keys</c> is 40.
    /// - Maximum character length for individual <c>values</c> is 500.
    /// (For example, <c>order_number: 25</c>, <c>item_type: produce</c>, <c>department: sales</c>)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public object? Tags { get; init; }

    /// <summary>
    /// Object containing default trial settings.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trial_defaults")]
    public TrialDefaults1? TrialDefaults { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
