using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record DecisionTaskCompletedEventAttributes
{
    /// <summary>
    /// User defined context for the workflow execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("executionContext")]
    public string? ExecutionContext { get; init; }

    /// <summary>
    /// The ID of the DecisionTaskScheduled event that was recorded when this decision task was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
    /// </summary>
    [JsonPropertyName("scheduledEventId")]
    public required int ScheduledEventId { get; init; }

    /// <summary>
    /// The ID of the DecisionTaskStarted event recorded when this decision task was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
    /// </summary>
    [JsonPropertyName("startedEventId")]
    public required int StartedEventId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taskList")]
    public TaskList? TaskList { get; init; }

    /// <summary>
    /// The maximum amount of time the decision task can wait to be assigned to a worker.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taskListScheduleToStartTimeout")]
    public string? TaskListScheduleToStartTimeout { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
