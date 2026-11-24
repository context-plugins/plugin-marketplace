using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record DescribeWorkflowExecutionInput
{
    /// <summary>
    /// The name of the domain containing the workflow execution.
    /// </summary>
    [JsonPropertyName("domain")]
    public required string Domain { get; init; }

    [JsonPropertyName("execution")]
    public required WorkflowExecution Execution { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
