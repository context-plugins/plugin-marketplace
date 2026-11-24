using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record DescribeMonitorResponse
{
    /// <summary>
    /// The name of the monitor.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MonitorName")]
    public string? MonitorName { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the monitor resource described.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MonitorArn")]
    public string? MonitorArn { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the auto predictor being monitored.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ResourceArn")]
    public string? ResourceArn { get; init; }

    /// <summary>
    /// The status of the monitor resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Status")]
    public string? Status { get; init; }

    /// <summary>
    /// The timestamp of the latest evaluation completed by the monitor.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LastEvaluationTime")]
    public DateTimeOffset? LastEvaluationTime { get; init; }

    /// <summary>
    /// The state of the monitor's latest evaluation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LastEvaluationState")]
    public string? LastEvaluationState { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Baseline")]
    public Baseline? Baseline { get; init; }

    /// <summary>
    /// An error message, if any, for the monitor.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Message")]
    public string? Message { get; init; }

    /// <summary>
    /// The timestamp for when the monitor resource was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CreationTime")]
    public DateTimeOffset? CreationTime { get; init; }

    /// <summary>
    /// The timestamp of the latest modification to the monitor.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LastModificationTime")]
    public DateTimeOffset? LastModificationTime { get; init; }

    /// <summary>
    /// The estimated number of minutes remaining before the monitor resource finishes its current evaluation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EstimatedEvaluationTimeRemainingInMinutes")]
    public int? EstimatedEvaluationTimeRemainingInMinutes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
