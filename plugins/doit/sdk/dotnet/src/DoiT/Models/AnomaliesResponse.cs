using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// List of detected cloud cost anomalies.
/// </summary>
public record AnomaliesResponse
{
    /// <summary>
    /// Anomalies in this page. Always an array; empty (<c>[]</c>) when there are no matching anomalies.
    /// </summary>
    [JsonPropertyName("anomalies")]
    public required IReadOnlyList<AnomalyItem> Anomalies { get; init; }

    /// <summary>
    /// Opaque token for the next page. Omitted when there is no next page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pageToken")]
    public string? PageToken { get; init; }

    /// <summary>
    /// Number of items in this page (<c>anomalies.length</c>). This is not the total count across all pages; the total across the full filtered result set is <c>totalCount</c>.
    /// </summary>
    [JsonPropertyName("rowCount")]
    public required long RowCount { get; init; }

    /// <summary>
    /// <c>true</c> when filtered anomalies remain beyond this page. Derived from the same "rows remain after the last returned row" check as <c>pageToken</c>, so the two are never contradictory: <c>pageToken</c> is present if and only if <c>truncated</c> is <c>true</c>.
    /// </summary>
    [JsonPropertyName("truncated")]
    public required bool Truncated { get; init; }

    /// <summary>
    /// Total number of anomalies matching the filters and time window, across all pages. This is a per-request snapshot: under concurrent writes, the value can differ between pages fetched during the same pagination sequence.
    /// </summary>
    [JsonPropertyName("totalCount")]
    public required long TotalCount { get; init; }

    /// <summary>
    /// Whether <c>totalCount</c> is exact. Always <c>true</c> for this operation, because <c>totalCount</c> is computed over the fully materialised filtered result set.
    /// </summary>
    [JsonPropertyName("totalCountExact")]
    public required bool TotalCountExact { get; init; }

    /// <summary>
    /// Anomaly-specific summary. <c>countBySeverity</c> and <c>totalCostOfAnomaly</c> cover the complete filtered result set across all pages, not the returned page. Anomalies whose severity cannot be determined (legacy documents) are counted in <c>totalCount</c> and <c>totalCostOfAnomaly</c> but in none of the three severity buckets in <c>countBySeverity</c>, so the three values can sum to less than <c>totalCount</c>. Computed as of this request; under concurrent writes, values may differ between pages fetched during the same pagination sequence.
    /// </summary>
    [JsonPropertyName("anomalySummary")]
    public required AnomalySummary AnomalySummary { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
