using System;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Resolved cost window for the snapshot.
/// </summary>
public record CloudDiagramCostTimeRange
{
    /// <summary>
    /// Inclusive start of the cost window (ISO date).
    /// </summary>
    [JsonPropertyName("startDate")]
    public required DateTimeOffset StartDate { get; init; }

    /// <summary>
    /// Inclusive end of the cost window (ISO date).
    /// </summary>
    [JsonPropertyName("endDate")]
    public required DateTimeOffset EndDate { get; init; }

    /// <summary>
    /// Bucket interval used for the trend series.
    /// </summary>
    [JsonPropertyName("interval")]
    public required Interval Interval { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
