using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;
using AmazonDevOpsGuru.Models.Enums;

namespace AmazonDevOpsGuru.Models;

public record CloudWatchMetricsDetail
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

    /// <summary>
    /// An array of CloudWatch dimensions associated with
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Dimensions")]
    public IReadOnlyList<CloudWatchMetricsDimension>? Dimensions { get; init; }

    /// <summary>
    /// The type of statistic associated with the CloudWatch metric. For more information, see Statistics in the Amazon CloudWatch User Guide.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Stat")]
    public Stat? Stat { get; init; }

    /// <summary>
    /// The unit of measure used for the CloudWatch metric. For example, Bytes, Seconds, Count, and Percent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Unit")]
    public string? Unit { get; init; }

    /// <summary>
    /// The length of time associated with the CloudWatch metric in number of seconds.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Period")]
    public int? Period { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MetricDataSummary")]
    public CloudWatchMetricsDataSummary? MetricDataSummary { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
