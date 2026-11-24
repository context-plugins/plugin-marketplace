import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Retry config. These settings determine when a failed task attempt is retried. */
export type RetryConfig = {
  /**
   * A task will be scheduled for retry between min_backoff and max_backoff duration after it fails,
   * if the queue's RetryConfig specifies that the task should be retried. The value must be given
   * as a string that indicates the length of time (in seconds) followed by `s` (for "seconds"). For
   * more information on the format, see the documentation for
   * [Duration](https://protobuf.dev/reference/protobuf/google.protobuf/#duration). `max_backoff`
   * will be truncated to the nearest second. If unspecified when the queue is created, Cloud Tasks
   * will pick the default. This field has the same meaning as [max_backoff_seconds in
   * queue.yaml/xml](https://cloud.google.com/appengine/docs/standard/python/config/queueref#retry_parameters).
   */
  maxBackoff?: string;
  /**
   * If positive, `max_retry_duration` specifies the time limit for retrying a failed task, measured
   * from when the task was first attempted. Once `max_retry_duration` time has passed *and* the
   * task has been attempted max_attempts times, no further attempts are made and the task is
   * deleted. A zero (0) indicates an unlimited duration, up to the [maximum task
   * retention](https://docs.cloud.google.com/tasks/docs/quotas#limits) limit. The value must be
   * given as a string that indicates the length of time (in seconds) followed by `s` (for
   * "seconds"). For the maximum possible value or the format, see the documentation for
   * [Duration](https://protobuf.dev/reference/protobuf/google.protobuf/#duration).
   * `max_retry_duration` will be truncated to the nearest second. If unspecified when the queue is
   * created, Cloud Tasks will pick the default. This field has the same meaning as [task_age_limit
   * in
   * queue.yaml/xml](https://cloud.google.com/appengine/docs/standard/python/config/queueref#retry_parameters).
   */
  maxRetryDuration?: string;
  /**
   * The time between retries will double `max_doublings` times. A task's retry interval starts at
   * min_backoff, then doubles `max_doublings` times, then increases linearly, and finally retries
   * at intervals of max_backoff up to max_attempts times. For example, if min_backoff is 10s,
   * max_backoff is 300s, and `max_doublings` is 3, then the a task will first be retried in 10s.
   * The retry interval will double three times, and then increase linearly by 2^3 * 10s. Finally,
   * the task will retry at intervals of max_backoff until the task has been attempted max_attempts
   * times. Thus, the requests will retry at 10s, 20s, 40s, 80s, 160s, 240s, 300s, 300s, .... If
   * unspecified when the queue is created, Cloud Tasks will pick the default. This field has the
   * same meaning as [max_doublings in
   * queue.yaml/xml](https://cloud.google.com/appengine/docs/standard/python/config/queueref#retry_parameters).
   */
  maxDoublings?: number;
  /**
   * Number of attempts per task, including the first attempt. (If the first attempt fails, there
   * will be `max_attempts - 1` retries.) Must be greater than or equal to -1, which indicates
   * unlimited attempts. Cloud Tasks stops retrying only when `max_attempts` and
   * `max_retry_duration` are both satisfied, or when the task is successfully executed. When the
   * task has been attempted `max_attempts` times and when the `max_retry_duration` time has passed,
   * no further attempts are made, and the task is deleted. If `max_attempts` is set to -1 and
   * `max_retry_duration` is set to 0, the task is retried until the [maximum task
   * retention](https://docs.cloud.google.com/tasks/docs/quotas#limits) limit is reached. If
   * unspecified when the queue is created, Cloud Tasks will pick the default. This field has the
   * same meaning as [task_retry_limit in
   * queue.yaml/xml](https://cloud.google.com/appengine/docs/standard/python/config/queueref#retry_parameters).
   */
  maxAttempts?: number;
  /**
   * A task will be scheduled for retry between min_backoff and max_backoff duration after it fails,
   * if the queue's RetryConfig specifies that the task should be retried. The value must be given
   * as a string that indicates the length of time (in seconds) followed by `s` (for "seconds"). For
   * more information on the format, see the documentation for
   * [Duration](https://protobuf.dev/reference/protobuf/google.protobuf/#duration). `min_backoff`
   * will be truncated to the nearest second. If unspecified when the queue is created, Cloud Tasks
   * will pick the default. This field has the same meaning as [min_backoff_seconds in
   * queue.yaml/xml](https://cloud.google.com/appengine/docs/standard/python/config/queueref#retry_parameters).
   */
  minBackoff?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const retryConfigSchema: Schema<RetryConfig> = s.object<RetryConfig>(
  {
    maxBackoff: s.optional(s.string()),
    maxRetryDuration: s.optional(s.string()),
    maxDoublings: s.optional(s.int()),
    maxAttempts: s.optional(s.int()),
    minBackoff: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
