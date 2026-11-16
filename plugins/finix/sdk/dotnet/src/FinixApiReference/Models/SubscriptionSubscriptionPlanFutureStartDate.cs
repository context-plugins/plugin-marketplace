using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record SubscriptionSubscriptionPlanFutureStartDate
{
    /// <summary>
    /// An object containing details about the buyer.
    /// </summary>
    [JsonPropertyName("buyer_details")]
    public required BuyerDetails4 BuyerDetails { get; init; }

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
    /// Indicates that the <c>Subscription</c> is scheduled to begin in the future. The timestamp specifies the exact start date for subscription billing.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("start_subscription_at")]
    public DateTimeOffset? StartSubscriptionAt { get; init; }

    /// <summary>
    /// The ID of the <c>Subscription Plan</c> from which to create the <c>Subscription</c>.
    /// </summary>
    [JsonPropertyName("subscription_plan_id")]
    public required string SubscriptionPlanId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
