using System.Text.Json.Serialization;
using GoogleCloudTasks.Core.Models;

namespace GoogleCloudTasks.Models;

/// <summary>
/// Optional. Specifies the task-level RetryConfig. If present, this overrides the Queue.retry_config for this task.
/// </summary>
public record RetryConfig3
{
    /// <summary>
    /// A task will be scheduled for retry between min_backoff and max_backoff duration after it fails, if the queue's RetryConfig specifies that the task should be retried. The value must be given as a string that indicates the length of time (in seconds) followed by <c>s</c> (for "seconds"). For more information on the format, see the documentation for <see href="https://protobuf.dev/reference/protobuf/google.protobuf/#duration">Duration</see>. <c>max_backoff</c> will be truncated to the nearest second. If unspecified when the queue is created, Cloud Tasks will pick the default. This field has the same meaning as <see href="https://cloud.google.com/appengine/docs/standard/python/config/queueref#retry_parameters">max_backoff_seconds in queue.yaml/xml</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxBackoff")]
    public string? MaxBackoff { get; init; }

    /// <summary>
    /// If positive, <c>max_retry_duration</c> specifies the time limit for retrying a failed task, measured from when the task was first attempted. Once <c>max_retry_duration</c> time has passed *and* the task has been attempted max_attempts times, no further attempts are made and the task is deleted. A zero (0) indicates an unlimited duration, up to the <see href="https://docs.cloud.google.com/tasks/docs/quotas#limits">maximum task retention</see> limit. The value must be given as a string that indicates the length of time (in seconds) followed by <c>s</c> (for "seconds"). For the maximum possible value or the format, see the documentation for <see href="https://protobuf.dev/reference/protobuf/google.protobuf/#duration">Duration</see>. <c>max_retry_duration</c> will be truncated to the nearest second. If unspecified when the queue is created, Cloud Tasks will pick the default. This field has the same meaning as <see href="https://cloud.google.com/appengine/docs/standard/python/config/queueref#retry_parameters">task_age_limit in queue.yaml/xml</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxRetryDuration")]
    public string? MaxRetryDuration { get; init; }

    /// <summary>
    /// The time between retries will double <c>max_doublings</c> times. A task's retry interval starts at min_backoff, then doubles <c>max_doublings</c> times, then increases linearly, and finally retries at intervals of max_backoff up to max_attempts times. For example, if min_backoff is 10s, max_backoff is 300s, and <c>max_doublings</c> is 3, then the a task will first be retried in 10s. The retry interval will double three times, and then increase linearly by 2^3 * 10s. Finally, the task will retry at intervals of max_backoff until the task has been attempted max_attempts times. Thus, the requests will retry at 10s, 20s, 40s, 80s, 160s, 240s, 300s, 300s, .... If unspecified when the queue is created, Cloud Tasks will pick the default. This field has the same meaning as <see href="https://cloud.google.com/appengine/docs/standard/python/config/queueref#retry_parameters">max_doublings in queue.yaml/xml</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxDoublings")]
    public int? MaxDoublings { get; init; }

    /// <summary>
    /// Number of attempts per task, including the first attempt. (If the first attempt fails, there will be <c>max_attempts - 1</c> retries.) Must be greater than or equal to -1, which indicates unlimited attempts. Cloud Tasks stops retrying only when <c>max_attempts</c> and <c>max_retry_duration</c> are both satisfied, or when the task is successfully executed. When the task has been attempted <c>max_attempts</c> times and when the <c>max_retry_duration</c> time has passed, no further attempts are made, and the task is deleted. If <c>max_attempts</c> is set to -1 and <c>max_retry_duration</c> is set to 0, the task is retried until the <see href="https://docs.cloud.google.com/tasks/docs/quotas#limits">maximum task retention</see> limit is reached. If unspecified when the queue is created, Cloud Tasks will pick the default. This field has the same meaning as <see href="https://cloud.google.com/appengine/docs/standard/python/config/queueref#retry_parameters">task_retry_limit in queue.yaml/xml</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxAttempts")]
    public int? MaxAttempts { get; init; }

    /// <summary>
    /// A task will be scheduled for retry between min_backoff and max_backoff duration after it fails, if the queue's RetryConfig specifies that the task should be retried. The value must be given as a string that indicates the length of time (in seconds) followed by <c>s</c> (for "seconds"). For more information on the format, see the documentation for <see href="https://protobuf.dev/reference/protobuf/google.protobuf/#duration">Duration</see>. <c>min_backoff</c> will be truncated to the nearest second. If unspecified when the queue is created, Cloud Tasks will pick the default. This field has the same meaning as <see href="https://cloud.google.com/appengine/docs/standard/python/config/queueref#retry_parameters">min_backoff_seconds in queue.yaml/xml</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("minBackoff")]
    public string? MinBackoff { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
