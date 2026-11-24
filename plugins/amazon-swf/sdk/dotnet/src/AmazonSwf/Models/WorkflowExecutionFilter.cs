using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record WorkflowExecutionFilter
{
    /// <summary>
    /// The workflowId to pass of match the criteria of this filter.
    /// </summary>
    [JsonPropertyName("workflowId")]
    public required string WorkflowId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
