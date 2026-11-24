using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;
using AmazonSwf.Models.Enums;

namespace AmazonSwf.Models;

public record WorkflowExecutionTerminatedEventAttributes
{
    /// <summary>
    /// The reason provided for the termination.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reason")]
    public string? Reason { get; init; }

    /// <summary>
    /// The details provided for the termination.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("details")]
    public string? Details { get; init; }

    /// <summary>
    /// The policy used for the child workflow executions of this workflow execution. The supported child policies are: TERMINATE – The child executions are terminated. REQUEST_CANCEL – A request to cancel is attempted for each child execution by recording a WorkflowExecutionCancelRequested event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event. ABANDON – No action is taken. The child executions continue to run.
    /// </summary>
    [JsonPropertyName("childPolicy")]
    public required ChildPolicy3 ChildPolicy { get; init; }

    /// <summary>
    /// If set, indicates that the workflow execution was automatically terminated, and specifies the cause. This happens if the parent workflow execution times out or is terminated and the child policy is set to terminate child executions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cause")]
    public Cause5? Cause { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
