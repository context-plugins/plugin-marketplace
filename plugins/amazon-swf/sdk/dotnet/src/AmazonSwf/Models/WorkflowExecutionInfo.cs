using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;
using AmazonSwf.Models.Enums;

namespace AmazonSwf.Models;

public record WorkflowExecutionInfo
{
    [JsonPropertyName("execution")]
    public required WorkflowExecution Execution { get; init; }

    [JsonPropertyName("workflowType")]
    public required WorkflowType WorkflowType { get; init; }

    /// <summary>
    /// The time when the execution was started.
    /// </summary>
    [JsonPropertyName("startTimestamp")]
    public required DateTimeOffset StartTimestamp { get; init; }

    /// <summary>
    /// The time when the workflow execution was closed. Set only if the execution status is CLOSED.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("closeTimestamp")]
    public DateTimeOffset? CloseTimestamp { get; init; }

    /// <summary>
    /// The current status of the execution.
    /// </summary>
    [JsonPropertyName("executionStatus")]
    public required ExecutionStatus ExecutionStatus { get; init; }

    /// <summary>
    /// If the execution status is closed then this specifies how the execution was closed: COMPLETED – the execution was successfully completed. CANCELED – the execution was canceled.Cancellation allows the implementation to gracefully clean up before the execution is closed. TERMINATED – the execution was force terminated. FAILED – the execution failed to complete. TIMED_OUT – the execution did not complete in the alloted time and was automatically timed out. CONTINUED_AS_NEW – the execution is logically continued. This means the current execution was completed and a new execution was started to car
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("closeStatus")]
    public CloseStatus? CloseStatus { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parent")]
    public WorkflowExecution? Parent { get; init; }

    /// <summary>
    /// The list of tags associated with the workflow execution. Tags can be used to identify and list workflow executions of interest through the visibility APIs. A workflow execution can have a maximum of 5 tags.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tagList")]
    public IReadOnlyList<string>? TagList { get; init; }

    /// <summary>
    /// Set to true if a cancellation is requested for this workflow execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cancelRequested")]
    public bool? CancelRequested { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
