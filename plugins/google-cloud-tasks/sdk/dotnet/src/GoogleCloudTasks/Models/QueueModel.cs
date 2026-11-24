using System.Text.Json.Serialization;
using GoogleCloudTasks.Core.Models;
using GoogleCloudTasks.Models.Enums;

namespace GoogleCloudTasks.Models;

/// <summary>
/// A queue is a container of related tasks. Queues are configured to manage how those tasks are dispatched. Configurable properties include rate limits, retry options, queue types, and others.
/// </summary>
public record QueueModel
{
    /// <summary>
    /// Settings that determine the retry behavior. * For tasks created using Cloud Tasks: the queue-level retry settings apply to all tasks in the queue that were created using Cloud Tasks. Retry settings cannot be set on individual tasks. * For tasks created using the App Engine SDK: the queue-level retry settings apply to all tasks in the queue which do not have retry settings explicitly set on the task and were created by the App Engine SDK. See <see href="https://cloud.google.com/appengine/docs/standard/python/taskqueue/push/retrying-tasks">App Engine documentation</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("retryConfig")]
    public RetryConfig1? RetryConfig { get; init; }

    /// <summary>
    /// Output only. The state of the queue. <c>state</c> can only be changed by calling PauseQueue, ResumeQueue, or uploading <see href="https://cloud.google.com/appengine/docs/python/config/queueref">queue.yaml/xml</see>. UpdateQueue cannot be used to change <c>state</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State? State { get; init; }

    /// <summary>
    /// Caller-specified and required in CreateQueue, after which it becomes output only. The queue name. The queue name must have the following format: <c>projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID</c> * <c>PROJECT_ID</c> can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), or periods (.). For more information, see <see href="https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects">Identifying projects</see> * <c>LOCATION_ID</c> is the canonical ID for the queue's location. The list of available locations can be obtained by calling ListLocations. For more information, see https://cloud.google.com/about/locations/. * <c>QUEUE_ID</c> can contain letters ([A-Za-z]), numbers ([0-9]), or hyphens (-). The maximum length is 100 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Overrides for task-level app_engine_routing. These settings apply only to App Engine tasks in this queue. Http tasks are not affected. If set, <c>app_engine_routing_override</c> is used for all App Engine tasks in the queue, no matter what the setting is for the task-level app_engine_routing.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("appEngineRoutingOverride")]
    public AppEngineRouting1? AppEngineRoutingOverride { get; init; }

    /// <summary>
    /// Configuration options for writing logs to <see href="https://cloud.google.com/logging/docs/">Stackdriver Logging</see>. If this field is unset, then no logs are written.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stackdriverLoggingConfig")]
    public StackdriverLoggingConfig1? StackdriverLoggingConfig { get; init; }

    /// <summary>
    /// Modifies HTTP target for HTTP tasks.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("httpTarget")]
    public HttpTarget2? HttpTarget { get; init; }

    /// <summary>
    /// Rate limits for task dispatches. rate_limits and retry_config are related because they both control task attempts. However they control task attempts in different ways: * rate_limits controls the total rate of dispatches from a queue (i.e. all traffic dispatched from the queue, regardless of whether the dispatch is from a first attempt or a retry). * retry_config controls what happens to a particular task after its first attempt fails. That is, retry_config controls task retries (the second attempt, third attempt, etc). The queue's actual dispatch rate is the result of: * Number of tasks in the queue * User-specified throttling: rate_limits, retry_config, and the queue's state. * System throttling due to <c>429</c> (Too Many Requests) or <c>503</c> (Service Unavailable) responses from the worker, high error rates, or to smooth sudden large traffic spikes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rateLimits")]
    public RateLimits1? RateLimits { get; init; }

    /// <summary>
    /// Output only. The last time this queue was purged. All tasks that were created before this time were purged. A queue can be purged using PurgeQueue, the <see href="https://cloud.google.com/appengine/docs/standard/python/taskqueue/push/deleting-tasks-and-queues#purging_all_tasks_from_a_queue">App Engine Task Queue SDK, or the Cloud Console</see>. Purge time will be truncated to the nearest microsecond. Purge time will be unset if the queue has never been purged.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("purgeTime")]
    public string? PurgeTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
