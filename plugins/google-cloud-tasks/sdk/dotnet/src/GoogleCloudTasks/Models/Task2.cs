using System.Text.Json.Serialization;
using GoogleCloudTasks.Core.Models;
using GoogleCloudTasks.Models.Enums;

namespace GoogleCloudTasks.Models;

/// <summary>
/// Required. The task to add. Task names have the following format: <c>projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID</c>. The user can optionally specify a task name. If a name is not specified then the system will generate a random unique task id, which will be set in the task returned in the response. If schedule_time is not set or is in the past then Cloud Tasks will set it to the current time. Task De-duplication: Explicitly specifying a task ID enables task de-duplication. If a task's ID is identical to that of an existing task or a task that was deleted or executed recently then the call will fail with ALREADY_EXISTS. The IDs of deleted tasks are not immediately available for reuse. It can take up to 24 hours (or 9 days if the task's queue was created using a queue.yaml or queue.xml) for the task ID to be released and made available again. Because there is an extra lookup cost to identify duplicate task names, these CreateTask calls have significantly increased latency. Using hashed strings for the task id or for the prefix of the task id is recommended. Choosing task ids that are sequential or have sequential prefixes, for example using a timestamp, causes an increase in latency and error rates in all task commands. The infrastructure relies on an approximately uniform distribution of task ids to store and serve tasks efficiently.
/// </summary>
public record Task2
{
    /// <summary>
    /// Output only. The view specifies which subset of the Task has been returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("view")]
    public View? View { get; init; }

    /// <summary>
    /// Output only. The time that the task was created. <c>create_time</c> will be truncated to the nearest second.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    /// <summary>
    /// Output only. The number of attempts which have received a response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("responseCount")]
    public int? ResponseCount { get; init; }

    /// <summary>
    /// Optional. Specifies the task-level RetryConfig. If present, this overrides the Queue.retry_config for this task.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("retryConfig")]
    public RetryConfig3? RetryConfig { get; init; }

    /// <summary>
    /// The deadline for requests sent to the worker. If the worker does not respond by this deadline then the request is cancelled and the attempt is marked as a <c>DEADLINE_EXCEEDED</c> failure. Cloud Tasks will retry the task according to the RetryConfig. Note that when the request is cancelled, Cloud Tasks will stop listening for the response, but whether the worker stops processing depends on the worker. For example, if the worker is stuck, it may not react to cancelled requests. The default and maximum values depend on the type of request: * For HTTP tasks, the default is 10 minutes. The deadline must be in the interval [15 seconds, 30 minutes]. * For App Engine tasks, 0 indicates that the request has the default deadline. The default deadline depends on the <see href="https://cloud.google.com/appengine/docs/standard/go/how-instances-are-managed#instance_scaling">scaling type</see> of the service: 10 minutes for standard apps with automatic scaling, 24 hours for standard apps with manual and basic scaling, and 60 minutes for flex apps. If the request deadline is set, it must be in the interval [15 seconds, 24 hours 15 seconds]. Regardless of the task's <c>dispatch_deadline</c>, the app handler will not run for longer than than the service's timeout. We recommend setting the <c>dispatch_deadline</c> to at most a few seconds more than the app handler's timeout. For more information see <see href="https://cloud.google.com/tasks/docs/creating-appengine-handlers#timeouts">Timeouts</see>. The value must be given as a string that indicates the length of time (in seconds) followed by <c>s</c> (for "seconds"). For more information on the format, see the documentation for <see href="https://protobuf.dev/reference/protobuf/google.protobuf/#duration">Duration</see>. <c>dispatch_deadline</c> will be truncated to the nearest millisecond. The deadline is an approximate deadline.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dispatchDeadline")]
    public string? DispatchDeadline { get; init; }

    /// <summary>
    /// Output only. The number of attempts dispatched. This count includes attempts which have been dispatched but haven't received a response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dispatchCount")]
    public int? DispatchCount { get; init; }

    /// <summary>
    /// Output only. The status of the task's first attempt. Only dispatch_time will be set. The other Attempt information is not retained by Cloud Tasks.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("firstAttempt")]
    public Attempt3? FirstAttempt { get; init; }

    /// <summary>
    /// Output only. The status of the task's last attempt.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastAttempt")]
    public Attempt1? LastAttempt { get; init; }

    /// <summary>
    /// The time when the task is scheduled to be attempted or retried. <c>schedule_time</c> will be truncated to the nearest microsecond.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scheduleTime")]
    public string? ScheduleTime { get; init; }

    /// <summary>
    /// HTTP request that is sent to the worker. An HTTP task is a task that has HttpRequest set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("httpRequest")]
    public HttpRequest2? HttpRequest { get; init; }

    /// <summary>
    /// HTTP request that is sent to the App Engine app handler. An App Engine task is a task that has AppEngineHttpRequest set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("appEngineHttpRequest")]
    public AppEngineHttpRequest2? AppEngineHttpRequest { get; init; }

    /// <summary>
    /// Optionally caller-specified in CreateTask. The task name. The task name must have the following format: <c>projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID</c> * <c>PROJECT_ID</c> can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), or periods (.). For more information, see <see href="https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects">Identifying projects</see> * <c>LOCATION_ID</c> is the canonical ID for the task's location. The list of available locations can be obtained by calling ListLocations. For more information, see https://cloud.google.com/about/locations/. * <c>QUEUE_ID</c> can contain letters ([A-Za-z]), numbers ([0-9]), or hyphens (-). The maximum length is 100 characters. * <c>TASK_ID</c> can contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), or underscores (_). The maximum length is 500 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
