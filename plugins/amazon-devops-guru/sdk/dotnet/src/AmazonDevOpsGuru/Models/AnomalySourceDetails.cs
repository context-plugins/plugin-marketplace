using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Models;

public record AnomalySourceDetails
{
    /// <summary>
    /// An array of CloudWatchMetricsDetail objects that contain information about analyzed CloudWatch metrics that show anomalous behavior.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CloudWatchMetrics")]
    public IReadOnlyList<CloudWatchMetricsDetail>? CloudWatchMetrics { get; init; }

    /// <summary>
    /// An array of PerformanceInsightsMetricsDetail objects that contain information about analyzed Performance Insights metrics that show anomalous behavior.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PerformanceInsightsMetrics")]
    public IReadOnlyList<PerformanceInsightsMetricsDetail>? PerformanceInsightsMetrics { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
