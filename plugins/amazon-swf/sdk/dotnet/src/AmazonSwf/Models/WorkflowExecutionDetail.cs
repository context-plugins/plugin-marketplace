using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record WorkflowExecutionDetail
{
    [JsonPropertyName("executionInfo")]
    public required WorkflowExecutionInfo ExecutionInfo { get; init; }

    [JsonPropertyName("executionConfiguration")]
    public required WorkflowExecutionConfiguration ExecutionConfiguration { get; init; }

    [JsonPropertyName("openCounts")]
    public required WorkflowExecutionOpenCounts OpenCounts { get; init; }

    /// <summary>
    /// The time when the last activity task was scheduled for this workflow execution. You can use this information to determine if the workflow has not made progress for an unusually long period of time and might require a corrective action.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("latestActivityTaskTimestamp")]
    public DateTimeOffset? LatestActivityTaskTimestamp { get; init; }

    /// <summary>
    /// The latest executionContext provided by the decider for this workflow execution. A decider can provide an executionContext (a free-form string) when closing a decision task using RespondDecisionTaskCompleted.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("latestExecutionContext")]
    public string? LatestExecutionContext { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
