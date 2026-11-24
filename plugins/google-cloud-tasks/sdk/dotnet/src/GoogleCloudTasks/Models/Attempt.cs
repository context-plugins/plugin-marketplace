using System.Text.Json.Serialization;
using GoogleCloudTasks.Core.Models;

namespace GoogleCloudTasks.Models;

/// <summary>
/// The status of a task attempt.
/// </summary>
public record Attempt
{
    /// <summary>
    /// Output only. The time that this attempt response was received. <c>response_time</c> will be truncated to the nearest microsecond.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("responseTime")]
    public string? ResponseTime { get; init; }

    /// <summary>
    /// Output only. The time that this attempt was scheduled. <c>schedule_time</c> will be truncated to the nearest microsecond.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scheduleTime")]
    public string? ScheduleTime { get; init; }

    /// <summary>
    /// Output only. The response from the worker for this attempt. If <c>response_time</c> is unset, then the task has not been attempted or is currently running and the <c>response_status</c> field is meaningless.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("responseStatus")]
    public Status3? ResponseStatus { get; init; }

    /// <summary>
    /// Output only. The time that this attempt was dispatched. <c>dispatch_time</c> will be truncated to the nearest microsecond.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dispatchTime")]
    public string? DispatchTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
