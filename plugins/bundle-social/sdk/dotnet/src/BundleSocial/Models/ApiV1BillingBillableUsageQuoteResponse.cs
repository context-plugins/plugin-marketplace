using System.Collections.Generic;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record ApiV1BillingBillableUsageQuoteResponse
{
    [JsonPropertyName("billable")]
    public required bool Billable { get; init; }

    [JsonPropertyName("lines")]
    public required IReadOnlyList<Line> Lines { get; init; }

    [JsonPropertyName("totalMicros")]
    public required int TotalMicros { get; init; }

    [JsonPropertyName("totalCents")]
    public required int TotalCents { get; init; }

    [JsonPropertyName("currency")]
    public string Currency { get; } = "usd";

    [JsonPropertyName("availableMicros")]
    public required int AvailableMicros { get; init; }

    [JsonPropertyName("availableCents")]
    public required int AvailableCents { get; init; }

    [JsonPropertyName("wouldExceedBalance")]
    public required bool WouldExceedBalance { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
