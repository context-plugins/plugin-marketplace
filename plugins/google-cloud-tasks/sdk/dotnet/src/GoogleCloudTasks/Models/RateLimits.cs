using System.Text.Json.Serialization;
using GoogleCloudTasks.Core.Models;

namespace GoogleCloudTasks.Models;

/// <summary>
/// Rate limits. This message determines the maximum rate that tasks can be dispatched by a queue, regardless of whether the dispatch is a first task attempt or a retry. Note: The debugging command, RunTask, will run a task even if the queue has reached its RateLimits.
/// </summary>
public record RateLimits
{
    /// <summary>
    /// The maximum rate at which tasks are dispatched from this queue. If unspecified when the queue is created, Cloud Tasks will pick the default. The maximum allowed value is 500. This field has the same meaning as <see href="https://cloud.google.com/appengine/docs/standard/python/config/queueref#rate">rate in queue.yaml/xml</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxDispatchesPerSecond")]
    public double? MaxDispatchesPerSecond { get; init; }

    /// <summary>
    /// Output only. The max burst size. Max burst size limits how fast tasks in queue are processed when many tasks are in the queue and the rate is high. This field allows the queue to have a high rate so processing starts shortly after a task is enqueued, but still limits resource usage when many tasks are enqueued in a short period of time. The <see href="https://wikipedia.org/wiki/Token_Bucket">token bucket</see> algorithm is used to control the rate of task dispatches. Each queue has a token bucket that holds tokens, up to the maximum specified by <c>max_burst_size</c>. Each time a task is dispatched, a token is removed from the bucket. Tasks will be dispatched until the queue's bucket runs out of tokens. The bucket will be continuously refilled with new tokens based on <c>max_dispatches_per_second</c>. Cloud Tasks automatically sets an appropriate <c>max_burst_size</c> based on the value of <c>max_dispatches_per_second</c>. The value is dynamically optimized to ensure queue stability and throughput. It is generally at least equal to <c>max_dispatches_per_second</c> but might be higher to accommodate bursts of traffic. For queues that were created or updated using <c>queue.yaml/xml</c>, <c>max_burst_size</c> is equal to <see href="https://cloud.google.com/appengine/docs/standard/python/config/queueref#bucket_size">bucket_size</see>. Since <c>max_burst_size</c> is output only, if UpdateQueue is called on a queue created by <c>queue.yaml/xml</c>, <c>max_burst_size</c> will be reset based on the value of <c>max_dispatches_per_second</c>, regardless of whether <c>max_dispatches_per_second</c> is updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxBurstSize")]
    public int? MaxBurstSize { get; init; }

    /// <summary>
    /// The maximum number of concurrent tasks that Cloud Tasks allows to be dispatched for this queue. After this threshold has been reached, Cloud Tasks stops dispatching tasks until the number of concurrent requests decreases. If unspecified when the queue is created, Cloud Tasks will pick the default. The maximum allowed value is 5,000. This field has the same meaning as <see href="https://cloud.google.com/appengine/docs/standard/python/config/queueref#max_concurrent_requests">max_concurrent_requests in queue.yaml/xml</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxConcurrentDispatches")]
    public int? MaxConcurrentDispatches { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
