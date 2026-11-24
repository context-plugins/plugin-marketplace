using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record ChildWorkflowExecutionTerminatedEventAttributes
{
    [JsonPropertyName("workflowExecution")]
    public required WorkflowExecution WorkflowExecution { get; init; }

    [JsonPropertyName("workflowType")]
    public required WorkflowType WorkflowType { get; init; }

    /// <summary>
    /// The ID of the StartChildWorkflowExecutionInitiated event corresponding to the StartChildWorkflowExecution Decision to start this child workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
    /// </summary>
    [JsonPropertyName("initiatedEventId")]
    public required int InitiatedEventId { get; init; }

    /// <summary>
    /// The ID of the ChildWorkflowExecutionStarted event recorded when this child workflow execution was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
    /// </summary>
    [JsonPropertyName("startedEventId")]
    public required int StartedEventId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
