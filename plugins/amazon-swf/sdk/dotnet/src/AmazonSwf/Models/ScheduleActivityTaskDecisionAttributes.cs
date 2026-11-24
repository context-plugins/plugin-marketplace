using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record ScheduleActivityTaskDecisionAttributes
{
    [JsonPropertyName("activityType")]
    public required ActivityType ActivityType { get; init; }

    /// <summary>
    /// The activityId of the activity task. The specified string must not contain a : (colon), / (slash), | (vertical bar), or any control characters (\u0000-\u001f | \u007f-\u009f). Also, it must not be the literal string arn.
    /// </summary>
    [JsonPropertyName("activityId")]
    public required string ActivityId { get; init; }

    /// <summary>
    /// Data attached to the event that can be used by the decider in subsequent workflow tasks. This data isn't sent to the activity.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("control")]
    public string? Control { get; init; }

    /// <summary>
    /// The input provided to the activity task.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("input")]
    public string? Input { get; init; }

    /// <summary>
    /// The maximum duration for this activity task. The duration is specified in seconds, an integer greater than or equal to 0. You can use NONE to specify unlimited duration. A schedule-to-close timeout for this activity task must be specified either as a default for the activity type or through this field. If neither this field is set nor a default schedule-to-close timeout was specified at registration time then a fault is returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scheduleToCloseTimeout")]
    public string? ScheduleToCloseTimeout { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taskList")]
    public TaskList? TaskList { get; init; }

    /// <summary>
    /// If set, specifies the priority with which the activity task is to be assigned to a worker. This overrides the defaultTaskPriority specified when registering the activity type using RegisterActivityType. Valid values are integers that range from Java's Integer.MIN_VALUE (-2147483648) to Integer.MAX_VALUE (2147483647). Higher numbers indicate higher priority. For more information about setting task priority, see Setting Task Priority in the Amazon SWF Developer Guide.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taskPriority")]
    public string? TaskPriority { get; init; }

    /// <summary>
    /// If set, specifies the maximum duration the activity task can wait to be assigned to a worker. This overrides the default schedule-to-start timeout specified when registering the activity type using RegisterActivityType. The duration is specified in seconds, an integer greater than or equal to 0. You can use NONE to specify unlimited duration. A schedule-to-start timeout for this activity task must be specified either as a default for the activity type or through this field. If neither this field is set nor a default schedule-to-start timeout was specified at registration time then a fault is r
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scheduleToStartTimeout")]
    public string? ScheduleToStartTimeout { get; init; }

    /// <summary>
    /// If set, specifies the maximum duration a worker may take to process this activity task. This overrides the default start-to-close timeout specified when registering the activity type using RegisterActivityType. The duration is specified in seconds, an integer greater than or equal to 0. You can use NONE to specify unlimited duration. A start-to-close timeout for this activity task must be specified either as a default for the activity type or through this field. If neither this field is set nor a default start-to-close timeout was specified at registration time then a fault is returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startToCloseTimeout")]
    public string? StartToCloseTimeout { get; init; }

    /// <summary>
    /// If set, specifies the maximum time before which a worker processing a task of this type must report progress by calling RecordActivityTaskHeartbeat. If the timeout is exceeded, the activity task is automatically timed out. If the worker subsequently attempts to record a heartbeat or returns a result, it is ignored. This overrides the default heartbeat timeout specified when registering the activity type using RegisterActivityType. The duration is specified in seconds, an integer greater than or equal to 0. You can use NONE to specify unlimited duration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("heartbeatTimeout")]
    public string? HeartbeatTimeout { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
