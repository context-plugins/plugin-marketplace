using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record SubscriptionSubscriptionPlanAllFields
{
    /// <summary>
    /// An object containing details about the buyer.
    /// </summary>
    [JsonPropertyName("buyer_details")]
    public required BuyerDetails5 BuyerDetails { get; init; }

    /// <summary>
    /// Timestamp of when the subscription ends. Applies to fixed amount subscriptions only.
    /// <para>
    /// Finix prorates the final charge if the subscription ends mid-billing-cycle. If <c>end_subscription_at</c> falls on a cycle boundary, the final charge is not prorated.
    /// </para>
    /// <para>
    /// The following rules apply:
    /// </para>
    /// <list type="bullet">
    ///   <item><description>Cannot be used with <c>total_billing_intervals</c> in the same request.</description></item>
    ///   <item><description>Must be after the subscription start.</description></item>
    ///   <item><description>Must be after the free trial period.</description></item>
    ///   <item><description>Must be after the discounted phase.</description></item>
    ///   <item><description>Cannot be updated after the subscription is created.</description></item>
    /// </list>
    /// <para>
    /// <b>Relationship with <c>total_billing_intervals</c> and <c>expires_at</c>:</b>
    /// </para>
    /// <list type="bullet">
    ///   <item><description>If <c>end_subscription_at</c> is provided, <c>total_billing_intervals</c> in the response is calculated as the number of started cycles needed to reach the end date.</description></item>
    ///   <item><description>If <c>total_billing_intervals</c> is provided, <c>end_subscription_at</c> in the response is calculated to match the last day of the final cycle.</description></item>
    ///   <item><description>Setting <c>end_subscription_at</c> also sets <c>expires_at</c> to the same value in the response.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("end_subscription_at")]
    public DateTimeOffset? EndSubscriptionAt { get; init; }

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
    /// Indicates that the subscription is scheduled to begin in the future. The timestamp specifies the exact start date for subscription billing.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("start_subscription_at")]
    public DateTimeOffset? StartSubscriptionAt { get; init; }

    /// <summary>
    /// The ID of the <c>Subscription Plan</c> from which to create the <c>Subscription</c>.
    /// </summary>
    [JsonPropertyName("subscription_plan_id")]
    public required string SubscriptionPlanId { get; init; }

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
    /// The total number of billing cycles for the <c>Subscription</c>. Cannot be used with <c>end_subscription_at</c> in the same request and cannot be updated after the subscription is created.
    /// <para>
    /// <b>Relationship with <c>end_subscription_at</c>:</b>
    /// </para>
    /// <list type="bullet">
    ///   <item><description>If <c>total_billing_intervals</c> is provided, <c>end_subscription_at</c> in the response is calculated to match the last day of the final cycle.</description></item>
    ///   <item><description>If <c>end_subscription_at</c> is provided, <c>total_billing_intervals</c> in the response is calculated as the number of started cycles needed to reach the end date.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_billing_intervals")]
    public int? TotalBillingIntervals { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
