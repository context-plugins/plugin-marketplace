import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Rate limits for task dispatches. rate_limits and retry_config are related because they both
 * control task attempts. However they control task attempts in different ways: * rate_limits
 * controls the total rate of dispatches from a queue (i.e. all traffic dispatched from the queue,
 * regardless of whether the dispatch is from a first attempt or a retry). * retry_config controls
 * what happens to a particular task after its first attempt fails. That is, retry_config controls
 * task retries (the second attempt, third attempt, etc). The queue's actual dispatch rate is the
 * result of: * Number of tasks in the queue * User-specified throttling: rate_limits, retry_config,
 * and the queue's state. * System throttling due to `429` (Too Many Requests) or `503` (Service
 * Unavailable) responses from the worker, high error rates, or to smooth sudden large traffic
 * spikes.
 */
export type RateLimits1 = {
  /**
   * The maximum rate at which tasks are dispatched from this queue. If unspecified when the queue
   * is created, Cloud Tasks will pick the default. The maximum allowed value is 500. This field has
   * the same meaning as [rate in
   * queue.yaml/xml](https://cloud.google.com/appengine/docs/standard/python/config/queueref#rate).
   */
  maxDispatchesPerSecond?: number;
  /**
   * Output only. The max burst size. Max burst size limits how fast tasks in queue are processed
   * when many tasks are in the queue and the rate is high. This field allows the queue to have a
   * high rate so processing starts shortly after a task is enqueued, but still limits resource
   * usage when many tasks are enqueued in a short period of time. The [token
   * bucket](https://wikipedia.org/wiki/Token_Bucket) algorithm is used to control the rate of task
   * dispatches. Each queue has a token bucket that holds tokens, up to the maximum specified by
   * `max_burst_size`. Each time a task is dispatched, a token is removed from the bucket. Tasks
   * will be dispatched until the queue's bucket runs out of tokens. The bucket will be continuously
   * refilled with new tokens based on `max_dispatches_per_second`. Cloud Tasks automatically sets
   * an appropriate `max_burst_size` based on the value of `max_dispatches_per_second`. The value is
   * dynamically optimized to ensure queue stability and throughput. It is generally at least equal
   * to `max_dispatches_per_second` but might be higher to accommodate bursts of traffic. For queues
   * that were created or updated using `queue.yaml/xml`, `max_burst_size` is equal to
   * [bucket_size](https://cloud.google.com/appengine/docs/standard/python/config/queueref#bucket_size).
   * Since `max_burst_size` is output only, if UpdateQueue is called on a queue created by
   * `queue.yaml/xml`, `max_burst_size` will be reset based on the value of
   * `max_dispatches_per_second`, regardless of whether `max_dispatches_per_second` is updated.
   */
  maxBurstSize?: number;
  /**
   * The maximum number of concurrent tasks that Cloud Tasks allows to be dispatched for this queue.
   * After this threshold has been reached, Cloud Tasks stops dispatching tasks until the number of
   * concurrent requests decreases. If unspecified when the queue is created, Cloud Tasks will pick
   * the default. The maximum allowed value is 5,000. This field has the same meaning as
   * [max_concurrent_requests in
   * queue.yaml/xml](https://cloud.google.com/appengine/docs/standard/python/config/queueref#max_concurrent_requests).
   */
  maxConcurrentDispatches?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rateLimits1Schema: Schema<RateLimits1> = s.object<RateLimits1>(
  {
    maxDispatchesPerSecond: s.optional(s.float64()),
    maxBurstSize: s.optional(s.int()),
    maxConcurrentDispatches: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
