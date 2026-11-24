using System;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record CreditGrant
{
    [JsonPropertyName("available")]
    public required double Available { get; init; }

    [JsonPropertyName("used")]
    public required double Used { get; init; }

    [JsonPropertyName("total")]
    public required double Total { get; init; }

    [JsonPropertyName("rolloverAmount")]
    public required double? RolloverAmount { get; init; }

    [JsonPropertyName("periodStart")]
    public required DateTimeOffset PeriodStart { get; init; }

    [JsonPropertyName("periodEnd")]
    public required DateTimeOffset? PeriodEnd { get; init; }

    [JsonPropertyName("rolloverEndDate")]
    public required DateTimeOffset? RolloverEndDate { get; init; }

    [JsonPropertyName("expiresAt")]
    public required DateTimeOffset? ExpiresAt { get; init; }

    [JsonPropertyName("isInRolloverWindow")]
    public required bool IsInRolloverWindow { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
