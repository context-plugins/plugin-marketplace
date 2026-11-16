using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Core.Validation.Attributes;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record Subscription
{
    /// <summary>
    /// The ID of the resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    [MinLength(1)]
    public string? Id { get; init; }

    /// <summary>
    /// Timestamp of when the object was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public DateTimeOffset? CreatedAt { get; init; }

    /// <summary>
    /// Timestamp of when the object was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updated_at")]
    public DateTimeOffset? UpdatedAt { get; init; }

    /// <summary>
    /// The total amount that will be debited in cents (e.g. 100 cents to debit $1.00).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount")]
    public long? Amount { get; init; }

    /// <summary>
    /// The ID of the <c>Application</c> associated with the <c>Subscription</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("application_id")]
    public string? ApplicationId { get; init; }

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
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billing_interval")]
    public BillingInterval? BillingInterval { get; init; }

    /// <summary>
    /// An object containing details about the buyer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buyer_details")]
    public BuyerDetails3? BuyerDetails { get; init; }

    /// <summary>
    /// If the subscription was canceled, this field shows how the cancellation was initiated.
    /// <para>
    /// Possible values:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>MERCHANT</c> - The customer (merchant) canceled the subscription themselves. The <c>linked_to</c> field indicates the related <c>Merchant</c>.</description></item>
    ///   <item><description><c>AUTOMATED_OVERDUE</c> - The subscription was canceled by the overdue system.</description></item>
    ///   <item><description><c>SUPPORT</c> - The subscription was canceled by Finix Support.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("canceled_via")]
    public CanceledVia? CanceledVia { get; init; }

    /// <summary>
    /// ISO 4217 3-letter currency code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency")]
    public Currency? Currency { get; init; }

    /// <summary>
    /// Timestamp of when the subscription ends. If <c>end_subscription_at</c> was included in the request, this field echoes that value. If only <c>total_billing_intervals</c> was provided, this field is calculated to match the last day of the final billing cycle.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("end_subscription_at")]
    public DateTimeOffset? EndSubscriptionAt { get; init; }

    /// <summary>
    /// The date-time that the <c>Subscription</c> expires. Set when <c>total_billing_intervals</c> or <c>end_subscription_at</c> is provided. When <c>end_subscription_at</c> is set, this field mirrors that value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expires_at")]
    public DateTimeOffset? ExpiresAt { get; init; }

    /// <summary>
    /// Timestamp when the first <see href="/api/transfers">Transfer</see> will occur.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("first_charge_at")]
    public DateTimeOffset? FirstChargeAt { get; init; }

    /// <summary>
    /// The ID of the <see href="/api/merchants">Merchant</see> resource that you wish to link to the <c>Subscription</c> (i.e., the merchant that the subscription belongs to).
    /// <para>
    /// At this time, only approved merchants with one of the following processors are valid:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>DUMMY_V1</c></description></item>
    ///   <item><description><c>FINIX_V1</c></description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linked_to")]
    public string? LinkedTo { get; init; }

    /// <summary>
    /// The type of the resource that is specified in the <c>linked_to</c> field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linked_type")]
    public LinkedType7? LinkedType { get; init; }

    /// <summary>
    /// Details when the next <see href="/api/transfers">Transfer</see> will occur.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("next_billing_date")]
    public NextBillingDate? NextBillingDate { get; init; }

    /// <summary>
    /// A human-readable name for the resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nickname")]
    public string? Nickname { get; init; }

    /// <summary>
    /// Indicates that the subscription is scheduled to begin in the future. The timestamp specifies the exact start date for subscription billing.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("start_subscription_at")]
    public DateTimeOffset? StartSubscriptionAt { get; init; }

    /// <summary>
    /// The state of the <c>Subscription</c>.
    /// <list type="bullet">
    ///   <item><description>The <c>NOT_STARTED</c> state occurs when the subscription has not yet started, typically indicated by a <c>start_subscription_at</c> timestamp set during creation.</description></item>
    ///   <item><description>A subscription in the <c>PAST_DUE</c> state is unpaid but has not yet been canceled.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State18? State { get; init; }

    /// <summary>
    /// An object containing subscription details.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subscription_details")]
    public SubscriptionDetails? SubscriptionDetails { get; init; }

    /// <summary>
    /// The ID of the <c>Subscription Link</c> that created the <c>Subscription</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subscription_link_id")]
    public string? SubscriptionLinkId { get; init; }

    /// <summary>
    /// Indicates the period within a subscription where specific rules apply.
    /// <list type="bullet">
    ///   <item><description><c>EVERGREEN</c> - The buyer is billed continuously for the subscription until the subscription is canceled.</description></item>
    ///   <item><description><c>DISCOUNT</c> - The buyer receives a discounted price for a limited billing interval, after which the customer is charged the full subscription amount.</description></item>
    ///   <item><description><c>FIXED</c> state - Applicable to fixed-length subscriptions.</description></item>
    ///   <item><description><c>NONE</c> - Indicates that when the <c>start_subscription_at</c> timestamp is set during subscription creation, the subscription is not yet in any phase, and billing has not started.</description></item>
    ///   <item><description><c>TRIAL</c> - The period during which the buyer is not billed; after this phase, the buyer will begin being billed.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subscription_phase")]
    public SubscriptionPhase? SubscriptionPhase { get; init; }

    /// <summary>
    /// The ID of a <see href="/api/subscription-plans">Subscription Plan</see> from which this <c>Subscription</c> was created. When provided, the plan's <c>amount</c>, <c>billing_interval</c>, and other defaults are inherited.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subscription_plan_id")]
    public string? SubscriptionPlanId { get; init; }

    /// <summary>
    /// Indicates whether the <c>Subscription</c> is associated with a usage-based <c>Subscription Plan</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("has_usage_based_plan")]
    public bool? HasUsageBasedPlan { get; init; }

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
    /// The total number of billing intervals for the <c>Subscription</c>. This represents the total count of recurring billing cycles, such as months or weeks, depending on the billing frequency.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_billing_intervals")]
    public int? TotalBillingIntervals { get; init; }

    /// <summary>
    /// An object containing link(s) relevant to the request. You can store these links for follow-up requests.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("_links")]
    public Links31? Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
