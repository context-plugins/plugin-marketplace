using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Models;

public record RecommendationRelatedAnomalySourceDetail
{
    /// <summary>
    /// An array of CloudWatchMetricsDetail objects that contains information about the analyzed metrics that displayed anomalous behavior.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CloudWatchMetrics")]
    public IReadOnlyList<RecommendationRelatedCloudWatchMetricsSourceDetail>? CloudWatchMetrics { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
