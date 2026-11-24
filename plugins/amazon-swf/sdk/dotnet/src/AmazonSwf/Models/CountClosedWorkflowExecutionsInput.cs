using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record CountClosedWorkflowExecutionsInput
{
    /// <summary>
    /// The name of the domain containing the workflow executions to count.
    /// </summary>
    [JsonPropertyName("domain")]
    public required string Domain { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startTimeFilter")]
    public ExecutionTimeFilter? StartTimeFilter { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("closeTimeFilter")]
    public ExecutionTimeFilter? CloseTimeFilter { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("executionFilter")]
    public WorkflowExecutionFilter? ExecutionFilter { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("typeFilter")]
    public WorkflowTypeFilter? TypeFilter { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tagFilter")]
    public TagFilter? TagFilter { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("closeStatusFilter")]
    public CloseStatusFilter? CloseStatusFilter { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
