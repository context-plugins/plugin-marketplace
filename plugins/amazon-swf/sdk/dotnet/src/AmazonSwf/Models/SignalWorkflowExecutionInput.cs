using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record SignalWorkflowExecutionInput
{
    /// <summary>
    /// The name of the domain containing the workflow execution to signal.
    /// </summary>
    [JsonPropertyName("domain")]
    public required string Domain { get; init; }

    /// <summary>
    /// The workflowId of the workflow execution to signal.
    /// </summary>
    [JsonPropertyName("workflowId")]
    public required string WorkflowId { get; init; }

    /// <summary>
    /// The runId of the workflow execution to signal.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("runId")]
    public string? RunId { get; init; }

    /// <summary>
    /// The name of the signal. This name must be meaningful to the target workflow.
    /// </summary>
    [JsonPropertyName("signalName")]
    public required string SignalName { get; init; }

    /// <summary>
    /// Data to attach to the WorkflowExecutionSignaled event in the target workflow execution's history.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("input")]
    public string? Input { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
