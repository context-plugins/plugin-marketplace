using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;
using AmazonSwf.Models.Enums;

namespace AmazonSwf.Models;

public record WorkflowTypeConfiguration
{
    /// <summary>
    /// The default maximum duration, specified when registering the workflow type, that a decision task for executions of this workflow type might take before returning completion or failure. If the task doesn'tdo close in the specified time then the task is automatically timed out and rescheduled. If the decider eventually reports a completion or failure, it is ignored. This default can be overridden when starting a workflow execution using the StartWorkflowExecution action or the StartChildWorkflowExecution Decision. The duration is specified in seconds, an integer greater than or equal to 0. You c
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("defaultTaskStartToCloseTimeout")]
    public string? DefaultTaskStartToCloseTimeout { get; init; }

    /// <summary>
    /// The default maximum duration, specified when registering the workflow type, for executions of this workflow type. This default can be overridden when starting a workflow execution using the StartWorkflowExecution action or the StartChildWorkflowExecution Decision. The duration is specified in seconds, an integer greater than or equal to 0. You can use NONE to specify unlimited duration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("defaultExecutionStartToCloseTimeout")]
    public string? DefaultExecutionStartToCloseTimeout { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("defaultTaskList")]
    public TaskList? DefaultTaskList { get; init; }

    /// <summary>
    /// The default task priority, specified when registering the workflow type, for all decision tasks of this workflow type. This default can be overridden when starting a workflow execution using the StartWorkflowExecution action or the StartChildWorkflowExecution decision. Valid values are integers that range from Java's Integer.MIN_VALUE (-2147483648) to Integer.MAX_VALUE (2147483647). Higher numbers indicate higher priority. For more information about setting task priority, see Setting Task Priority in the Amazon SWF Developer Guide.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("defaultTaskPriority")]
    public string? DefaultTaskPriority { get; init; }

    /// <summary>
    /// The default policy to use for the child workflow executions when a workflow execution of this type is terminated, by calling the TerminateWorkflowExecution action explicitly or due to an expired timeout. This default can be overridden when starting a workflow execution using the StartWorkflowExecution action or the StartChildWorkflowExecution Decision. The supported child policies are: TERMINATE – The child executions are terminated. REQUEST_CANCEL – A request to cancel is attempted for each child execution by recording a WorkflowExecutionCancelRequested event in its history. It is up to the d
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("defaultChildPolicy")]
    public DefaultChildPolicy1? DefaultChildPolicy { get; init; }

    /// <summary>
    /// The default IAM role attached to this workflow type. Executions of this workflow type need IAM roles to invoke Lambda functions. If you don't specify an IAM role when starting this workflow type, the default Lambda role is attached to the execution. For more information, see https://docs.aws.amazon.com/amazonswf/latest/developerguide/lambda-task.html in the Amazon SWF Developer Guide.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("defaultLambdaRole")]
    public string? DefaultLambdaRole { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
