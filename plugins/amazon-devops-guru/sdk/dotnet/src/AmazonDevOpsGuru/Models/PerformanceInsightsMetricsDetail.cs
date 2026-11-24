using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Models;

public record PerformanceInsightsMetricsDetail
{
    /// <summary>
    /// The name used for a specific Performance Insights metric.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MetricDisplayName")]
    public string? MetricDisplayName { get; init; }

    /// <summary>
    /// The unit of measure for a metric. For example, a session or a process.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Unit")]
    public string? Unit { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MetricQuery")]
    public PerformanceInsightsMetricQuery? MetricQuery { get; init; }

    /// <summary>
    /// For more information, see PerformanceInsightsReferenceData .
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ReferenceData")]
    public IReadOnlyList<PerformanceInsightsReferenceData>? ReferenceData { get; init; }

    /// <summary>
    /// The metric statistics during the anomalous period detected by DevOps Guru;
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StatsAtAnomaly")]
    public IReadOnlyList<PerformanceInsightsStat>? StatsAtAnomaly { get; init; }

    /// <summary>
    /// Typical metric statistics that are not considered anomalous. When DevOps Guru analyzes metrics, it compares them to StatsAtBaseline to help determine if they are anomalous.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StatsAtBaseline")]
    public IReadOnlyList<PerformanceInsightsStat>? StatsAtBaseline { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
