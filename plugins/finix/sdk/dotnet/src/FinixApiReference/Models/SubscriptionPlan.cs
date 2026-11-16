using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record SubscriptionPlan
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
    /// ID of the <c>Application</c> the resource was created under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("application_id")]
    [MinLength(1)]
    public string? ApplicationId { get; init; }

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
    /// A human-readable name for the resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nickname")]
    public string? Nickname { get; init; }

    /// <summary>
    /// A human-friendly name for the <c>Subscription Plan</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("plan_name")]
    public string? PlanName { get; init; }

    /// <summary>
    /// A description of the <c>Subscription Plan</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// The total amount that will be debited in cents (e.g. 100 cents to debit $1.00).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount")]
    public long? Amount { get; init; }

    /// <summary>
    /// ISO 4217 3-letter currency code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency")]
    public Currency? Currency { get; init; }

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
    /// Whether subscriptions created from this plan will have a fixed term or will continue until canceled. If <c>default_total_billing_intervals</c> is set, this plan's <c>duration_type</c> is automatically set to <c>FIXED_TERM</c>. Otherwise, the <c>duration_type</c> is set to <c>EVERGREEN</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("duration_type")]
    public DurationType? DurationType { get; init; }

    /// <summary>
    /// Object containing default billing settings.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billing_defaults")]
    public BillingDefaults? BillingDefaults { get; init; }

    /// <summary>
    /// Object containing default trial settings.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trial_defaults")]
    public TrialDefaults? TrialDefaults { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("discount_phase_defaults")]
    public DiscountPhaseDefaults? DiscountPhaseDefaults { get; init; }

    /// <summary>
    /// Indicates whether the <c>Subscription Plan</c> is usage-based.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_usage_based")]
    public bool? IsUsageBased { get; init; }

    /// <summary>
    /// The state of the <c>Subscription Plan</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State19? State { get; init; }

    /// <summary>
    /// A list of billing items associated with the <c>Subscription Plan</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billing_items")]
    public IReadOnlyList<object>? BillingItems { get; init; }

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
    /// An object containing link(s) relevant to the request. You can store these links for follow-up requests.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("_links")]
    public Links31? Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
