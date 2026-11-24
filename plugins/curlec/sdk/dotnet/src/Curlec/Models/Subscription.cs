using System.Collections.Generic;
using System.Text.Json.Serialization;
using Curlec.Core.Models;
using Curlec.Core.Validation.Attributes;
using Curlec.Models.Enums;

namespace Curlec.Models;

/// <summary>
/// A recurring billing subscription linking a customer to a plan. Requires customer mandate authorization via short_url before charges can be collected.
/// </summary>
public record Subscription
{
    /// <summary>
    /// Subscription ID. Prefix: sub_
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entity")]
    public EntityRazorpaySubscriptionsApi? Entity { get; init; }

    /// <summary>
    /// Associated plan ID (plan_*).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("plan_id")]
    public string? PlanId { get; init; }

    /// <summary>
    /// Subscription lifecycle status. created→authenticated (mandate authorized)→active→completed/cancelled/expired. pending=charge retry scheduled; halted=multiple failures; paused=temporarily stopped.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public StatusRazorpaySubscriptionsApi? Status { get; init; }

    /// <summary>
    /// Unix timestamp of current billing cycle start.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("current_start")]
    public int? CurrentStart { get; init; }

    /// <summary>
    /// Unix timestamp of current billing cycle end.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("current_end")]
    public int? CurrentEnd { get; init; }

    /// <summary>
    /// Unix timestamp when subscription ended (cancelled/completed/expired).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ended_at")]
    public int? EndedAt { get; init; }

    /// <summary>
    /// Number of plan units billed per cycle.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quantity")]
    public int? Quantity { get; init; } = 1;

    /// <summary>
    /// Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("notes")]
    [MaxProperties(15)]
    public IReadOnlyDictionary<string, string>? Notes { get; init; }

    /// <summary>
    /// Unix timestamp of next scheduled charge attempt.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("charge_at")]
    public int? ChargeAt { get; init; }

    /// <summary>
    /// Unix timestamp of first charge. Defaults to subscription creation time.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("start_at")]
    public int? StartAt { get; init; }

    /// <summary>
    /// Unix timestamp after which no more charges will be attempted.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("end_at")]
    public int? EndAt { get; init; }

    /// <summary>
    /// Number of mandate authorization attempts.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("auth_attempts")]
    public int? AuthAttempts { get; init; }

    /// <summary>
    /// Total billing cycles. 0 = indefinite.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_count")]
    public int? TotalCount { get; init; }

    /// <summary>
    /// Number of billing cycles successfully charged.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paid_count")]
    public int? PaidCount { get; init; }

    /// <summary>
    /// Remaining billing cycles.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("remaining_count")]
    public int? RemainingCount { get; init; }

    /// <summary>
    /// 1 = Razorpay sends SMS/email notifications to customer on each charge.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customer_notify")]
    public CustomerNotify? CustomerNotify { get; init; }

    /// <summary>
    /// Mandate authorization URL. Must be sent to the customer to activate the subscription.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("short_url")]
    public string? ShortUrl { get; init; }

    /// <summary>
    /// True if a plan/quantity change is scheduled for the next cycle.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("has_scheduled_changes")]
    public bool? HasScheduledChanges { get; init; }

    /// <summary>
    /// When scheduled changes take effect.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("change_scheduled_at")]
    public ChangeScheduledAt? ChangeScheduledAt { get; init; }

    /// <summary>
    /// Source that created the subscription (e.g., api, dashboard).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source")]
    public string? Source { get; init; }

    /// <summary>
    /// Offer/coupon applied to the subscription.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("offer_id")]
    public string? OfferId { get; init; }

    /// <summary>
    /// Unix timestamp by which the customer must authorize the mandate.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expire_by")]
    public int? ExpireBy { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public int? CreatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
