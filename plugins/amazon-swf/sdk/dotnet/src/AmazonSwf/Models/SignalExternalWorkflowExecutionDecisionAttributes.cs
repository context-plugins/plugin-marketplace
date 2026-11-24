using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record SignalExternalWorkflowExecutionDecisionAttributes
{
    /// <summary>
    /// The workflowId of the workflow execution to be signaled.
    /// </summary>
    [JsonPropertyName("workflowId")]
    public required string WorkflowId { get; init; }

    /// <summary>
    /// The runId of the workflow execution to be signaled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("runId")]
    public string? RunId { get; init; }

    /// <summary>
    /// The name of the signal.The target workflow execution uses the signal name and input to process the signal.
    /// </summary>
    [JsonPropertyName("signalName")]
    public required string SignalName { get; init; }

    /// <summary>
    /// The input data to be provided with the signal. The target workflow execution uses the signal name and input data to process the signal.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("input")]
    public string? Input { get; init; }

    /// <summary>
    /// The data attached to the event that can be used by the decider in subsequent decision tasks.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("control")]
    public string? Control { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
