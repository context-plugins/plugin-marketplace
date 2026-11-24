using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Aggregate counts of risk statuses across the full filtered result set (all pages), not just the current page.
/// </summary>
public record RiskAggregations
{
    [JsonPropertyName("total")]
    public required long Total { get; init; }

    [JsonPropertyName("atRisk")]
    public required long AtRisk { get; init; }

    [JsonPropertyName("onTrack")]
    public required long OnTrack { get; init; }

    [JsonPropertyName("unknown")]
    public required long Unknown { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
