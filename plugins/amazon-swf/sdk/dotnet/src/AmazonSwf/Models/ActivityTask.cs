using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record ActivityTask
{
    /// <summary>
    /// The opaque string used as a handle on the task. This token is used by workers to communicate progress and response information back to the system about the task.
    /// </summary>
    [JsonPropertyName("taskToken")]
    public required string TaskToken { get; init; }

    /// <summary>
    /// The unique ID of the task.
    /// </summary>
    [JsonPropertyName("activityId")]
    public required string ActivityId { get; init; }

    /// <summary>
    /// The ID of the ActivityTaskStarted event recorded in the history.
    /// </summary>
    [JsonPropertyName("startedEventId")]
    public required int StartedEventId { get; init; }

    [JsonPropertyName("workflowExecution")]
    public required WorkflowExecution WorkflowExecution { get; init; }

    [JsonPropertyName("activityType")]
    public required ActivityType ActivityType { get; init; }

    /// <summary>
    /// The inputs provided when the activity task was scheduled. The form of the input is user defined and should be meaningful to the activity implementation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("input")]
    public string? Input { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
