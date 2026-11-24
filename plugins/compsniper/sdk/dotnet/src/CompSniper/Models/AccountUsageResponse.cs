using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Models;
using CompSniper.Core.Validation;
using CompSniper.Core.Validation.Attributes;

namespace CompSniper.Models;

public record AccountUsageResponse
{
    [JsonPropertyName("plan")]
    public required string Plan { get; init; }

    [JsonPropertyName("quota")]
    public required int Quota { get; init; }

    [JsonPropertyName("used")]
    public required int Used { get; init; }

    [JsonPropertyName("remaining")]
    public required int Remaining { get; init; }

    [JsonPropertyName("periodStart")]
    public required DateTimeOffset PeriodStart { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("periodEnd")]
    public DateTimeOffset? PeriodEnd { get; init; }

    [JsonPropertyName("rateLimitPerMinute")]
    public required int RateLimitPerMinute { get; init; }

    [JsonPropertyName("sharedFreeQuota")]
    public required bool SharedFreeQuota { get; init; }

    /// <summary>
    /// Unused monthly requests carried from a full-price upgrade. These expire at the next renewal.
    /// </summary>
    [JsonPropertyName("rolloverBalance")]
    public required int RolloverBalance { get; init; }

    [JsonPropertyName("creditBalance")]
    public required int CreditBalance { get; init; }

    /// <summary>
    /// Carryover plus monthly requests remaining plus purchased credits.
    /// </summary>
    [JsonPropertyName("totalAvailable")]
    public required int TotalAvailable { get; init; }

    [JsonPropertyName("purchaseCreditsUrl")]
    [Format(FormatKind.Uri)]
    public required string PurchaseCreditsUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
