using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record WorkflowExecutionFailedEventAttributes
{
    /// <summary>
    /// The descriptive reason provided for the failure.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reason")]
    public string? Reason { get; init; }

    /// <summary>
    /// The details of the failure.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("details")]
    public string? Details { get; init; }

    /// <summary>
    /// The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in the FailWorkflowExecution decision to fail this execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
    /// </summary>
    [JsonPropertyName("decisionTaskCompletedEventId")]
    public required int DecisionTaskCompletedEventId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
