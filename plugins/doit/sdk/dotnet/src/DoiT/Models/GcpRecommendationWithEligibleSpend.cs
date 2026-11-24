using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// A single GCP recommendation paired with its eligible-spend usage series.
/// </summary>
public record GcpRecommendationWithEligibleSpend
{
    /// <summary>
    /// Shelf-price hourly equivalent ($/h) of the recommended commitment, derived from the median hourly eligible usage over the trailing window multiplied by <c>estimatedAverageCoverage</c>. Use this to compare the recommendation line to eligible usage on charts.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("estimatedEquivalentRecommendedCommitment")]
    public double? EstimatedEquivalentRecommendedCommitment { get; init; }

    /// <summary>
    /// Recommended commitment metrics for the requested (service, region) scope.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recommendation")]
    public GcpRecommendation? Recommendation { get; init; }

    /// <summary>
    /// Eligible spend over time at the requested <c>granularity</c>. Empty when no eligible usage exists in the trailing window.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eligibleUsage")]
    public IReadOnlyList<EligibleSpendDataPoint>? EligibleUsage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
