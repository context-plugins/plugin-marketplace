using System.Text.Json.Serialization;
using GoogleCloudTasks.Core.Models;

namespace GoogleCloudTasks.Models;

/// <summary>
/// Rate limits for task dispatches. rate_limits and retry_config are related because they both control task attempts. However they control task attempts in different ways: * rate_limits controls the total rate of dispatches from a queue (i.e. all traffic dispatched from the queue, regardless of whether the dispatch is from a first attempt or a retry). * retry_config controls what happens to a particular task after its first attempt fails. That is, retry_config controls task retries (the second attempt, third attempt, etc). The queue's actual dispatch rate is the result of: * Number of tasks in the queue * User-specified throttling: rate_limits, retry_config, and the queue's state. * System throttling due to <c>429</c> (Too Many Requests) or <c>503</c> (Service Unavailable) responses from the worker, high error rates, or to smooth sudden large traffic spikes.
/// </summary>
public record RateLimits1
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
