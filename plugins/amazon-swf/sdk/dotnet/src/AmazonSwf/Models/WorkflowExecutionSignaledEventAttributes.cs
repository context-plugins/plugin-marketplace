using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record WorkflowExecutionSignaledEventAttributes
{
    /// <summary>
    /// The name of the signal received. The decider can use the signal name and inputs to determine how to the process the signal.
    /// </summary>
    [JsonPropertyName("signalName")]
    public required string SignalName { get; init; }

    /// <summary>
    /// The inputs provided with the signal. The decider can use the signal name and inputs to determine how to process the signal.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("input")]
    public string? Input { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("externalWorkflowExecution")]
    public WorkflowExecution? ExternalWorkflowExecution { get; init; }

    /// <summary>
    /// The ID of the SignalExternalWorkflowExecutionInitiated event corresponding to the SignalExternalWorkflow decision to signal this workflow execution.The source event with this ID can be found in the history of the source workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event. This field is set only if the signal was initiated by another workflow execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("externalInitiatedEventId")]
    public int? ExternalInitiatedEventId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
