using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Anomaly-specific summary. <c>countBySeverity</c> and <c>totalCostOfAnomaly</c> cover the complete filtered result set across all pages, not the returned page. Anomalies whose severity cannot be determined (legacy documents) are counted in <c>totalCount</c> and <c>totalCostOfAnomaly</c> but in none of the three severity buckets in <c>countBySeverity</c>, so the three values can sum to less than <c>totalCount</c>. Computed as of this request; under concurrent writes, values may differ between pages fetched during the same pagination sequence.
/// </summary>
public record AnomalySummary
{
    /// <summary>
    /// Count of matching anomalies per severity level. All three keys are always present, with zero counts included.
    /// </summary>
    [JsonPropertyName("countBySeverity")]
    public required CountBySeverity CountBySeverity { get; init; }

    /// <summary>
    /// Sum of <c>costOfAnomaly</c> across all matching anomalies, in USD, rounded to cents. Every matching anomaly contributes, linked ones included, so a single cost spike described at more than one level of detail contributes once per anomaly describing it.
    /// </summary>
    [JsonPropertyName("totalCostOfAnomaly")]
    public required double TotalCostOfAnomaly { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
