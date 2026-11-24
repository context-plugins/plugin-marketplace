using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Models;
using CompSniper.Core.Validation;
using CompSniper.Core.Validation.Attributes;

namespace CompSniper.Models;

public record ShippingRateUsageResponse
{
    [JsonPropertyName("plan")]
    public required string Plan { get; init; }

    [JsonPropertyName("status")]
    public required string Status { get; init; }

    [JsonPropertyName("quota")]
    [Minimum(0)]
    public required int Quota { get; init; }

    [JsonPropertyName("used")]
    [Minimum(0)]
    public required int Used { get; init; }

    [JsonPropertyName("remaining")]
    [Minimum(0)]
    public required int Remaining { get; init; }

    [JsonPropertyName("rateLimitPerMinute")]
    [Minimum(0)]
    public required int RateLimitPerMinute { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("periodStart")]
    public DateTimeOffset? PeriodStart { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("periodEnd")]
    public DateTimeOffset? PeriodEnd { get; init; }

    [JsonPropertyName("subscriptionUrl")]
    [Format(FormatKind.Uri)]
    public required string SubscriptionUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
