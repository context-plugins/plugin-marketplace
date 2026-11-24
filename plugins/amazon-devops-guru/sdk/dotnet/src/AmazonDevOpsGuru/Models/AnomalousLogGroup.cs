using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Models;

public record AnomalousLogGroup
{
    /// <summary>
    /// The name of the CloudWatch log group.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LogGroupName")]
    public string? LogGroupName { get; init; }

    /// <summary>
    /// The time the anomalous log events began. The impact start time indicates the time of the first log anomaly event that occurs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ImpactStartTime")]
    public DateTimeOffset? ImpactStartTime { get; init; }

    /// <summary>
    /// The time the anomalous log events stopped.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ImpactEndTime")]
    public DateTimeOffset? ImpactEndTime { get; init; }

    /// <summary>
    /// The number of log lines that were scanned for anomalous log events.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NumberOfLogLinesScanned")]
    public int? NumberOfLogLinesScanned { get; init; }

    /// <summary>
    /// The log anomalies in the log group. Each log anomaly displayed represents a cluster of similar anomalous log events.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LogAnomalyShowcases")]
    public IReadOnlyList<LogAnomalyShowcase>? LogAnomalyShowcases { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
