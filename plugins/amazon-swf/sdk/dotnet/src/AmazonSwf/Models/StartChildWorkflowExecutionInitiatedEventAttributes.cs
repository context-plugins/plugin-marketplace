using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;
using AmazonSwf.Models.Enums;

namespace AmazonSwf.Models;

public record StartChildWorkflowExecutionInitiatedEventAttributes
{
    /// <summary>
    /// The workflowId of the child workflow execution.
    /// </summary>
    [JsonPropertyName("workflowId")]
    public required string WorkflowId { get; init; }

    [JsonPropertyName("workflowType")]
    public required WorkflowType WorkflowType { get; init; }

    /// <summary>
    /// Data attached to the event that can be used by the decider in subsequent decision tasks. This data isn't sent to the activity.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("control")]
    public string? Control { get; init; }

    /// <summary>
    /// The inputs provided to the child workflow execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("input")]
    public string? Input { get; init; }

    /// <summary>
    /// The maximum duration for the child workflow execution. If the workflow execution isn't closed within this duration, it is timed out and force-terminated. The duration is specified in seconds, an integer greater than or equal to 0. You can use NONE to specify unlimited duration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("executionStartToCloseTimeout")]
    public string? ExecutionStartToCloseTimeout { get; init; }

    [JsonPropertyName("taskList")]
    public required TaskList TaskList { get; init; }

    /// <summary>
    /// The priority assigned for the decision tasks for this workflow execution. Valid values are integers that range from Java's Integer.MIN_VALUE (-2147483648) to Integer.MAX_VALUE (2147483647). Higher numbers indicate higher priority. For more information about setting task priority, see Setting Task Priority in the Amazon SWF Developer Guide.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taskPriority")]
    public string? TaskPriority { get; init; }

    /// <summary>
    /// The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in the StartChildWorkflowExecution Decision to request this child workflow execution. This information can be useful for diagnosing problems by tracing back the cause of events.
    /// </summary>
    [JsonPropertyName("decisionTaskCompletedEventId")]
    public required int DecisionTaskCompletedEventId { get; init; }

    /// <summary>
    /// The policy to use for the child workflow executions if this execution gets terminated by explicitly calling the TerminateWorkflowExecution action or due to an expired timeout. The supported child policies are: TERMINATE – The child executions are terminated. REQUEST_CANCEL – A request to cancel is attempted for each child execution by recording a WorkflowExecutionCancelRequested event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event. ABANDON – No action is taken. The child executions continue to run.
    /// </summary>
    [JsonPropertyName("childPolicy")]
    public required ChildPolicy6 ChildPolicy { get; init; }

    /// <summary>
    /// The maximum duration allowed for the decision tasks for this workflow execution. The duration is specified in seconds, an integer greater than or equal to 0. You can use NONE to specify unlimited duration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taskStartToCloseTimeout")]
    public string? TaskStartToCloseTimeout { get; init; }

    /// <summary>
    /// The list of tags to associated with the child workflow execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tagList")]
    public IReadOnlyList<string>? TagList { get; init; }

    /// <summary>
    /// The IAM role to attach to the child workflow execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lambdaRole")]
    public string? LambdaRole { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
