using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record PredictorMonitorEvaluation
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the resource to monitor.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ResourceArn")]
    public string? ResourceArn { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the monitor resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MonitorArn")]
    public string? MonitorArn { get; init; }

    /// <summary>
    /// The timestamp that indicates when the monitor evaluation was started.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EvaluationTime")]
    public DateTimeOffset? EvaluationTime { get; init; }

    /// <summary>
    /// The status of the monitor evaluation. The state can be SUCCESS or FAILURE.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EvaluationState")]
    public string? EvaluationState { get; init; }

    /// <summary>
    /// The timestamp that indicates the start of the window that is used for monitor evaluation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("WindowStartDatetime")]
    public DateTimeOffset? WindowStartDatetime { get; init; }

    /// <summary>
    /// The timestamp that indicates the end of the window that is used for monitor evaluation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("WindowEndDatetime")]
    public DateTimeOffset? WindowEndDatetime { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PredictorEvent")]
    public PredictorEvent? PredictorEvent { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MonitorDataSource")]
    public MonitorDataSource? MonitorDataSource { get; init; }

    /// <summary>
    /// A list of metrics Forecast calculated when monitoring a predictor. You can compare the value for each metric in the list to the metric's value in the Baseline to see how your predictor's performance is changing.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MetricResults")]
    public IReadOnlyList<MetricResult>? MetricResults { get; init; }

    /// <summary>
    /// The number of items considered during the evaluation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NumItemsEvaluated")]
    public int? NumItemsEvaluated { get; init; }

    /// <summary>
    /// Information about any errors that may have occurred during the monitor evaluation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Message")]
    public string? Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
