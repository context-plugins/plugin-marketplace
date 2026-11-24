using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;
using AmazonSwf.Models.Enums;

namespace AmazonSwf.Models;

public record WorkflowExecutionTimedOutEventAttributes
{
    /// <summary>
    /// The type of timeout that caused this event.
    /// </summary>
    [JsonPropertyName("timeoutType")]
    public string TimeoutType { get; } = "START_TO_CLOSE";

    /// <summary>
    /// The policy used for the child workflow executions of this workflow execution. The supported child policies are: TERMINATE – The child executions are terminated. REQUEST_CANCEL – A request to cancel is attempted for each child execution by recording a WorkflowExecutionCancelRequested event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event. ABANDON – No action is taken. The child executions continue to run.
    /// </summary>
    [JsonPropertyName("childPolicy")]
    public required ChildPolicy3 ChildPolicy { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
