using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record DomainConfiguration
{
    /// <summary>
    /// The retention period for workflow executions in this domain.
    /// </summary>
    [JsonPropertyName("workflowExecutionRetentionPeriodInDays")]
    public required string WorkflowExecutionRetentionPeriodInDays { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
