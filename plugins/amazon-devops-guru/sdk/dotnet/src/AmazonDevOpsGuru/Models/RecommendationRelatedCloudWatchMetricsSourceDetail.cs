using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Models;

public record RecommendationRelatedCloudWatchMetricsSourceDetail
{
    /// <summary>
    /// The name of the CloudWatch metric.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MetricName")]
    public string? MetricName { get; init; }

    /// <summary>
    /// The namespace of the CloudWatch metric. A namespace is a container for CloudWatch metrics.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Namespace")]
    public string? Namespace { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
