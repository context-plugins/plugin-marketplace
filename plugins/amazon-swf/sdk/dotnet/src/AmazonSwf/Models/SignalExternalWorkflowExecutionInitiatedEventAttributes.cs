using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record SignalExternalWorkflowExecutionInitiatedEventAttributes
{
    /// <summary>
    /// The workflowId of the external workflow execution.
    /// </summary>
    [JsonPropertyName("workflowId")]
    public required string WorkflowId { get; init; }

    /// <summary>
    /// The runId of the external workflow execution to send the signal to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("runId")]
    public string? RunId { get; init; }

    /// <summary>
    /// The name of the signal.
    /// </summary>
    [JsonPropertyName("signalName")]
    public required string SignalName { get; init; }

    /// <summary>
    /// The input provided to the signal.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("input")]
    public string? Input { get; init; }

    /// <summary>
    /// The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in the SignalExternalWorkflowExecution decision for this signal. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
    /// </summary>
    [JsonPropertyName("decisionTaskCompletedEventId")]
    public required int DecisionTaskCompletedEventId { get; init; }

    /// <summary>
    /// Data attached to the event that can be used by the decider in subsequent decision tasks.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("control")]
    public string? Control { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
