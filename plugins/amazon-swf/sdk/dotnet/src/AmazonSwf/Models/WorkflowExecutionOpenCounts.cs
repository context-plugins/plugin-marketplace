using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record WorkflowExecutionOpenCounts
{
    /// <summary>
    /// The count of activity tasks whose status is OPEN.
    /// </summary>
    [JsonPropertyName("openActivityTasks")]
    public required int OpenActivityTasks { get; init; }

    /// <summary>
    /// The count of decision tasks whose status is OPEN. A workflow execution can have at most one open decision task.
    /// </summary>
    [JsonPropertyName("openDecisionTasks")]
    public required int OpenDecisionTasks { get; init; }

    /// <summary>
    /// The count of timers started by this workflow execution that have not fired yet.
    /// </summary>
    [JsonPropertyName("openTimers")]
    public required int OpenTimers { get; init; }

    /// <summary>
    /// The count of child workflow executions whose status is OPEN.
    /// </summary>
    [JsonPropertyName("openChildWorkflowExecutions")]
    public required int OpenChildWorkflowExecutions { get; init; }

    /// <summary>
    /// The count of Lambda tasks whose status is OPEN.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("openLambdaFunctions")]
    public int? OpenLambdaFunctions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
