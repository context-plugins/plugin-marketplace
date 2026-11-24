using System;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;
using AmazonDevOpsGuru.Models.Enums;

namespace AmazonDevOpsGuru.Models;

public record LogAnomalyClass
{
    /// <summary>
    /// The name of the Amazon CloudWatch log stream that the anomalous log event belongs to. A log stream is a sequence of log events that share the same source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LogStreamName")]
    public string? LogStreamName { get; init; }

    /// <summary>
    /// The type of log anomaly that has been detected.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LogAnomalyType")]
    public LogAnomalyType? LogAnomalyType { get; init; }

    /// <summary>
    /// The token where the anomaly was detected. This may refer to an exception or another location, or it may be blank for log anomalies such as format anomalies.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LogAnomalyToken")]
    public string? LogAnomalyToken { get; init; }

    /// <summary>
    /// The ID of the log event.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LogEventId")]
    public string? LogEventId { get; init; }

    /// <summary>
    /// The explanation for why the log event is considered an anomaly.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Explanation")]
    public string? Explanation { get; init; }

    /// <summary>
    /// The number of log lines where this anomalous log event occurs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NumberOfLogLinesOccurrences")]
    public int? NumberOfLogLinesOccurrences { get; init; }

    /// <summary>
    /// The time of the first occurrence of the anomalous log event.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LogEventTimestamp")]
    public DateTimeOffset? LogEventTimestamp { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
