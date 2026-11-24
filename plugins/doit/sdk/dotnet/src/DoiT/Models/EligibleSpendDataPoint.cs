using System;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// One time-bucketed eligible-spend usage point for the recommendation chart. Units are shelf-price hourly dollars ($/h) unless noted by the client visualization.
/// </summary>
public record EligibleSpendDataPoint
{
    /// <summary>
    /// Start of the time bucket for this data point (UTC).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("usageTime")]
    public DateTimeOffset? UsageTime { get; init; }

    /// <summary>
    /// Total eligible usage in the bucket when granularity is <c>hour</c>. Prefer min/max/median for coarser granularities.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("totalUsage")]
    public double? TotalUsage { get; init; }

    /// <summary>
    /// Minimum eligible usage ($/h) observed in the bucket (day/week/month views).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("minUsage")]
    public double? MinUsage { get; init; }

    /// <summary>
    /// Maximum eligible usage ($/h) observed in the bucket (day/week/month views).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxUsage")]
    public double? MaxUsage { get; init; }

    /// <summary>
    /// Median eligible usage ($/h) observed in the bucket (day/week/month views).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("medianUsage")]
    public double? MedianUsage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
