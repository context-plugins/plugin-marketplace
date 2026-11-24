using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;
using AmazonSwf.Models.Enums;

namespace AmazonSwf.Models;

public record WorkflowExecutionConfiguration
{
    /// <summary>
    /// The maximum duration allowed for decision tasks for this workflow execution. The duration is specified in seconds, an integer greater than or equal to 0. You can use NONE to specify unlimited duration.
    /// </summary>
    [JsonPropertyName("taskStartToCloseTimeout")]
    public required string TaskStartToCloseTimeout { get; init; }

    /// <summary>
    /// The total duration for this workflow execution. The duration is specified in seconds, an integer greater than or equal to 0. You can use NONE to specify unlimited duration.
    /// </summary>
    [JsonPropertyName("executionStartToCloseTimeout")]
    public required string ExecutionStartToCloseTimeout { get; init; }

    [JsonPropertyName("taskList")]
    public required TaskList TaskList { get; init; }

    /// <summary>
    /// The priority assigned to decision tasks for this workflow execution. Valid values are integers that range from Java's Integer.MIN_VALUE (-2147483648) to Integer.MAX_VALUE (2147483647). Higher numbers indicate higher priority. For more information about setting task priority, see Setting Task Priority in the Amazon SWF Developer Guide.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taskPriority")]
    public string? TaskPriority { get; init; }

    /// <summary>
    /// The policy to use for the child workflow executions if this workflow execution is terminated, by calling the TerminateWorkflowExecution action explicitly or due to an expired timeout. The supported child policies are: TERMINATE – The child executions are terminated. REQUEST_CANCEL – A request to cancel is attempted for each child execution by recording a WorkflowExecutionCancelRequested event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event. ABANDON – No action is taken. The child executions continue to run.
    /// </summary>
    [JsonPropertyName("childPolicy")]
    public required ChildPolicy2 ChildPolicy { get; init; }

    /// <summary>
    /// The IAM role attached to the child workflow execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lambdaRole")]
    public string? LambdaRole { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
