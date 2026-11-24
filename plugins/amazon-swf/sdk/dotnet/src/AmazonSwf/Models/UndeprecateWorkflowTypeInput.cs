using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record UndeprecateWorkflowTypeInput
{
    /// <summary>
    /// The name of the domain of the deprecated workflow type.
    /// </summary>
    [JsonPropertyName("domain")]
    public required string Domain { get; init; }

    [JsonPropertyName("workflowType")]
    public required WorkflowType WorkflowType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
