using System;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Models;

public record TimestampMetricValuePair
{
    /// <summary>
    /// A Timestamp that specifies the time the event occurred.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Timestamp")]
    public DateTimeOffset? Timestamp { get; init; }

    /// <summary>
    /// Value of the anomalous metric data point at respective Timestamp.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MetricValue")]
    public double? MetricValue { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
