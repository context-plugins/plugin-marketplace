using System.Collections.Generic;
using System.Text.Json.Serialization;
using Curlec.Core.Models;
using Curlec.Core.Validation.Attributes;
using Curlec.Models.Enums;

namespace Curlec.Models;

public record SubscriptionsRequest
{
    /// <summary>
    /// Plan ID (plan_*) to subscribe the customer to.
    /// </summary>
    [JsonPropertyName("plan_id")]
    public required string PlanId { get; init; }

    /// <summary>
    /// Total number of billing cycles. Use 0 for indefinite (no fixed end).
    /// </summary>
    [JsonPropertyName("total_count")]
    public required int TotalCount { get; init; }

    /// <summary>
    /// Number of plan units billed per cycle.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quantity")]
    public int? Quantity { get; init; } = 1;

    /// <summary>
    /// 1 to have Razorpay notify customer via SMS/email on each charge event.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customer_notify")]
    public CustomerNotify1? CustomerNotify { get; init; }

    /// <summary>
    /// Unix timestamp for the first charge. Defaults to subscription creation time.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("start_at")]
    public int? StartAt { get; init; }

    /// <summary>
    /// Unix timestamp deadline for the customer to authorize the mandate.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expire_by")]
    public int? ExpireBy { get; init; }

    /// <summary>
    /// One-time charges added to the first billing cycle only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("addons")]
    public IReadOnlyList<Addon>? Addons { get; init; }

    /// <summary>
    /// Offer/coupon ID to apply to the subscription.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("offer_id")]
    public string? OfferId { get; init; }

    /// <summary>
    /// If provided, Razorpay sends the mandate auth link directly to the customer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("notify_info")]
    public NotifyInfo? NotifyInfo { get; init; }

    /// <summary>
    /// Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("notes")]
    [MaxProperties(15)]
    public IReadOnlyDictionary<string, string>? Notes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
