using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;
using AmazonDevOpsGuru.Models.Enums;

namespace AmazonDevOpsGuru.Models;

public record CloudWatchMetricsDataSummary
{
    /// <summary>
    /// This is a list of Amazon CloudWatch metric values at given timestamp.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TimestampMetricValuePairList")]
    public IReadOnlyList<TimestampMetricValuePair>? TimestampMetricValuePairList { get; init; }

    /// <summary>
    /// This is an enum of the status showing whether the metric value pair list has partial or complete data, or if there was an error.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StatusCode")]
    public StatusCode? StatusCode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
