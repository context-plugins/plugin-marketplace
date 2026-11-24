using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record WorkflowExecution
{
    /// <summary>
    /// The user defined identifier associated with the workflow execution.
    /// </summary>
    [JsonPropertyName("workflowId")]
    public required string WorkflowId { get; init; }

    /// <summary>
    /// A system-generated unique identifier for the workflow execution.
    /// </summary>
    [JsonPropertyName("runId")]
    public required string RunId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
