using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record SubscriptionFixedLengthEndDate
{
    /// <summary>
    /// The total amount that will be debited in cents (e.g. 100 cents to debit $1.00).
    /// </summary>
    [JsonPropertyName("amount")]
    public required long Amount { get; init; }

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
    /// An object containing details about the buyer.
    /// </summary>
    [JsonPropertyName("buyer_details")]
    public required BuyerDetails7 BuyerDetails { get; init; }

    /// <summary>
    /// ISO 4217 3-letter currency code.
    /// </summary>
    [JsonPropertyName("currency")]
    public required Currency Currency { get; init; }

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
    /// An object containing subscription details.
    /// </summary>
    [JsonPropertyName("subscription_details")]
    public required SubscriptionDetails1 SubscriptionDetails { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
