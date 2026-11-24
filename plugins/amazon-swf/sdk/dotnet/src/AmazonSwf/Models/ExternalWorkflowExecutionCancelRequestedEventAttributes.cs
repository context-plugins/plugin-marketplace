using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record ExternalWorkflowExecutionCancelRequestedEventAttributes
{
    [JsonPropertyName("workflowExecution")]
    public required WorkflowExecution WorkflowExecution { get; init; }

    /// <summary>
    /// The ID of the RequestCancelExternalWorkflowExecutionInitiated event corresponding to the RequestCancelExternalWorkflowExecution decision to cancel this external workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
    /// </summary>
    [JsonPropertyName("initiatedEventId")]
    public required int InitiatedEventId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
