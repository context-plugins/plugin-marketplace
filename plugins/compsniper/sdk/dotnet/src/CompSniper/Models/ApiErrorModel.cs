using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Models;
using CompSniper.Core.Validation;
using CompSniper.Core.Validation.Attributes;

namespace CompSniper.Models;

public record ApiErrorModel
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public string? Error { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("code")]
    public string? Code { get; init; }

    /// <summary>
    /// Seconds before a temporary rate_limited request may be retried.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("retry_after")]
    public int? RetryAfter { get; init; }

    /// <summary>
    /// Billing-cycle reset for quota_exceeded.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reset_at")]
    public DateTimeOffset? ResetAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("plan")]
    public string? Plan { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quota")]
    public int? Quota { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("used")]
    public int? Used { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("remaining")]
    public int? Remaining { get; init; }

    /// <summary>
    /// Temporary carried-over requests remaining.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rollover_balance")]
    public int? RolloverBalance { get; init; }

    /// <summary>
    /// Plan-management URL for quota_exceeded.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("upgrade_url")]
    [Format(FormatKind.Uri)]
    public string? UpgradeUrl { get; init; }

    /// <summary>
    /// Non-expiring purchased credits remaining.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("credit_balance")]
    public int? CreditBalance { get; init; }

    /// <summary>
    /// Credit purchase URL for quota_exceeded.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("purchase_credits_url")]
    [Format(FormatKind.Uri)]
    public string? PurchaseCreditsUrl { get; init; }

    /// <summary>
    /// Shipping Rates plan URL for shipping_subscription_required or shipping_quota_exceeded.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subscription_url")]
    [Format(FormatKind.Uri)]
    public string? SubscriptionUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
