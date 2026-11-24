using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record AwsRecommendationWithEligibleSpend
{
    /// <summary>
    /// Recommended commitment metrics for the requested commitment type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recommendation")]
    public AwsRecommendation? Recommendation { get; init; }

    /// <summary>
    /// Eligible spend over time at the requested <c>granularity</c>. Empty when no eligible usage exists in the trailing window.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eligibleUsage")]
    public IReadOnlyList<EligibleSpendDataPoint>? EligibleUsage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
