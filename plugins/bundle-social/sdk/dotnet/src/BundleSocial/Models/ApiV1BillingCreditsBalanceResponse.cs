using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record ApiV1BillingCreditsBalanceResponse
{
    [JsonPropertyName("organizationId")]
    public required string OrganizationId { get; init; }

    [JsonPropertyName("currency")]
    public string Currency { get; } = "usd";

    [JsonPropertyName("balanceMicros")]
    public required int BalanceMicros { get; init; }

    [JsonPropertyName("heldMicros")]
    public required int HeldMicros { get; init; }

    [JsonPropertyName("availableMicros")]
    public required int AvailableMicros { get; init; }

    [JsonPropertyName("balanceCents")]
    public required int BalanceCents { get; init; }

    [JsonPropertyName("availableCents")]
    public required int AvailableCents { get; init; }

    [JsonPropertyName("lowBalanceThresholdMicros")]
    public required int? LowBalanceThresholdMicros { get; init; }

    [JsonPropertyName("lowBalance")]
    public required bool LowBalance { get; init; }

    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset? UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
