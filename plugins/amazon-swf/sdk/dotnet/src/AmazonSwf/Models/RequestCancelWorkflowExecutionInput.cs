using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record RequestCancelWorkflowExecutionInput
{
    /// <summary>
    /// The name of the domain containing the workflow execution to cancel.
    /// </summary>
    [JsonPropertyName("domain")]
    public required string Domain { get; init; }

    /// <summary>
    /// The workflowId of the workflow execution to cancel.
    /// </summary>
    [JsonPropertyName("workflowId")]
    public required string WorkflowId { get; init; }

    /// <summary>
    /// The runId of the workflow execution to cancel.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("runId")]
    public string? RunId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
