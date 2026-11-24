using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;
using AmazonSwf.Models.Enums;

namespace AmazonSwf.Models;

public record WorkflowExecutionStartedEventAttributes
{
    /// <summary>
    /// The input provided to the workflow execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("input")]
    public string? Input { get; init; }

    /// <summary>
    /// The maximum duration for this workflow execution. The duration is specified in seconds, an integer greater than or equal to 0. You can use NONE to specify unlimited duration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("executionStartToCloseTimeout")]
    public string? ExecutionStartToCloseTimeout { get; init; }

    /// <summary>
    /// The maximum duration of decision tasks for this workflow type. The duration is specified in seconds, an integer greater than or equal to 0. You can use NONE to specify unlimited duration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taskStartToCloseTimeout")]
    public string? TaskStartToCloseTimeout { get; init; }

    /// <summary>
    /// The policy to use for the child workflow executions if this workflow execution is terminated, by calling the TerminateWorkflowExecution action explicitly or due to an expired timeout. The supported child policies are: TERMINATE – The child executions are terminated. REQUEST_CANCEL – A request to cancel is attempted for each child execution by recording a WorkflowExecutionCancelRequested event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event. ABANDON – No action is taken. The child executions continue to run.
    /// </summary>
    [JsonPropertyName("childPolicy")]
    public required ChildPolicy2 ChildPolicy { get; init; }

    [JsonPropertyName("taskList")]
    public required TaskList TaskList { get; init; }

    /// <summary>
    /// The priority of the decision tasks in the workflow execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taskPriority")]
    public string? TaskPriority { get; init; }

    [JsonPropertyName("workflowType")]
    public required WorkflowType WorkflowType { get; init; }

    /// <summary>
    /// The list of tags associated with this workflow execution. An execution can have up to 5 tags.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tagList")]
    public IReadOnlyList<string>? TagList { get; init; }

    /// <summary>
    /// If this workflow execution was started due to a ContinueAsNewWorkflowExecution decision, then it contains the runId of the previous workflow execution that was closed and continued as this execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("continuedExecutionRunId")]
    public string? ContinuedExecutionRunId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parentWorkflowExecution")]
    public WorkflowExecution? ParentWorkflowExecution { get; init; }

    /// <summary>
    /// The ID of the StartChildWorkflowExecutionInitiated event corresponding to the StartChildWorkflowExecution Decision to start this workflow execution. The source event with this ID can be found in the history of the source workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parentInitiatedEventId")]
    public int? ParentInitiatedEventId { get; init; }

    /// <summary>
    /// The IAM role attached to the workflow execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lambdaRole")]
    public string? LambdaRole { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
