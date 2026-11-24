using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Bounded cost snapshot for a diagram layer. Composes the diagram's total spend,
/// period-over-period change, top resources by cost (capped at 5), top services by
/// cost (capped at 5), and the most recent 12 trend buckets at the requested interval.
/// </summary>
public record CloudDiagramCostSnapshot
{
    /// <summary>
    /// Diagram (layer) ID this snapshot was computed for.
    /// </summary>
    [JsonPropertyName("diagramId")]
    public required string DiagramId { get; init; }

    /// <summary>
    /// Currency the cost numbers are reported in (e.g. <c>USD</c>).
    /// </summary>
    [JsonPropertyName("currency")]
    public required string Currency { get; init; }

    /// <summary>
    /// Resolved cost window for the snapshot.
    /// </summary>
    [JsonPropertyName("timeRange")]
    public required CloudDiagramCostTimeRange TimeRange { get; init; }

    /// <summary>
    /// Total cost across the entire diagram for the snapshot window.
    /// </summary>
    [JsonPropertyName("total")]
    public required double Total { get; init; }

    /// <summary>
    /// Period-over-period change as a fraction (e.g. 0.142 = +14.2%). <c>null</c> when no
    /// prior period of equal length is available for comparison.
    /// </summary>
    [JsonPropertyName("trendingPct")]
    public required double? TrendingPct { get; init; }

    /// <summary>
    /// Top resources by cost, capped at 5.
    /// </summary>
    [JsonPropertyName("topResources")]
    [MaxLength(5)]
    public required IReadOnlyList<CloudDiagramCostResource> TopResources { get; init; }

    /// <summary>
    /// Top services by cost, capped at 5.
    /// </summary>
    [JsonPropertyName("byService")]
    [MaxLength(5)]
    public required IReadOnlyList<CloudDiagramCostServiceBreakdown> ByService { get; init; }

    /// <summary>
    /// Most recent trend buckets at the requested interval, capped at 12.
    /// </summary>
    [JsonPropertyName("trend")]
    [MaxLength(12)]
    public required IReadOnlyList<CloudDiagramCostTrendBucket> Trend { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
