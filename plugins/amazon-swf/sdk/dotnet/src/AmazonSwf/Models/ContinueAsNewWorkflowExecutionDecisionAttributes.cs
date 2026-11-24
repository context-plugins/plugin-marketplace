using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;
using AmazonSwf.Models.Enums;

namespace AmazonSwf.Models;

public record ContinueAsNewWorkflowExecutionDecisionAttributes
{
    /// <summary>
    /// The input provided to the new workflow execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("input")]
    public string? Input { get; init; }

    /// <summary>
    /// If set, specifies the total duration for this workflow execution. This overrides the defaultExecutionStartToCloseTimeout specified when registering the workflow type. The duration is specified in seconds, an integer greater than or equal to 0. You can use NONE to specify unlimited duration. An execution start-to-close timeout for this workflow execution must be specified either as a default for the workflow type or through this field. If neither this field is set nor a default execution start-to-close timeout was specified at registration time then a fault is returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("executionStartToCloseTimeout")]
    public string? ExecutionStartToCloseTimeout { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taskList")]
    public TaskList? TaskList { get; init; }

    /// <summary>
    /// The task priority that, if set, specifies the priority for the decision tasks for this workflow execution. This overrides the defaultTaskPriority specified when registering the workflow type. Valid values are integers that range from Java's Integer.MIN_VALUE (-2147483648) to Integer.MAX_VALUE (2147483647). Higher numbers indicate higher priority. For more information about setting task priority, see Setting Task Priority in the Amazon SWF Developer Guide.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taskPriority")]
    public string? TaskPriority { get; init; }

    /// <summary>
    /// Specifies the maximum duration of decision tasks for the new workflow execution. This parameter overrides the defaultTaskStartToCloseTimout specified when registering the workflow type using RegisterWorkflowType. The duration is specified in seconds, an integer greater than or equal to 0. You can use NONE to specify unlimited duration. A task start-to-close timeout for the new workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default task start-to-close timeout was specified at registration time then
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taskStartToCloseTimeout")]
    public string? TaskStartToCloseTimeout { get; init; }

    /// <summary>
    /// If set, specifies the policy to use for the child workflow executions of the new execution if it is terminated by calling the TerminateWorkflowExecution action explicitly or due to an expired timeout. This policy overrides the default child policy specified when registering the workflow type using RegisterWorkflowType. The supported child policies are: TERMINATE – The child executions are terminated. REQUEST_CANCEL – A request to cancel is attempted for each child execution by recording a WorkflowExecutionCancelRequested event in its history. It is up to the decider to take appropriate actions
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("childPolicy")]
    public ChildPolicy? ChildPolicy { get; init; }

    /// <summary>
    /// The list of tags to associate with the new workflow execution. A maximum of 5 tags can be specified. You can list workflow executions with a specific tag by calling ListOpenWorkflowExecutions or ListClosedWorkflowExecutions and specifying a TagFilter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tagList")]
    public IReadOnlyList<string>? TagList { get; init; }

    /// <summary>
    /// The version of the workflow to start.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workflowTypeVersion")]
    public string? WorkflowTypeVersion { get; init; }

    /// <summary>
    /// The IAM role to attach to the new (continued) execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lambdaRole")]
    public string? LambdaRole { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
