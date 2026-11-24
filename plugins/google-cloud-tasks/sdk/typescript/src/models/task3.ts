import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { appEngineHttpRequest2Schema, type AppEngineHttpRequest2 } from "./app-engine-http-request2.js";
import { attempt1Schema, type Attempt1 } from "./attempt1.js";
import { attempt3Schema, type Attempt3 } from "./attempt3.js";
import { httpRequest2Schema, type HttpRequest2 } from "./http-request2.js";
import { retryConfig3Schema, type RetryConfig3 } from "./retry-config3.js";
import { viewSchema, type View } from "./view.js";

/** The created task. */
export type Task3 = {
  /** Output only. The view specifies which subset of the Task has been returned. */
  view?: View;
  /**
   * Output only. The time that the task was created. `create_time` will be truncated to the nearest
   * second.
   */
  createTime?: string;
  /** Output only. The number of attempts which have received a response. */
  responseCount?: number;
  /**
   * Optional. Specifies the task-level RetryConfig. If present, this overrides the
   * Queue.retry_config for this task.
   */
  retryConfig?: RetryConfig3;
  /**
   * The deadline for requests sent to the worker. If the worker does not respond by this deadline
   * then the request is cancelled and the attempt is marked as a `DEADLINE_EXCEEDED` failure. Cloud
   * Tasks will retry the task according to the RetryConfig. Note that when the request is
   * cancelled, Cloud Tasks will stop listening for the response, but whether the worker stops
   * processing depends on the worker. For example, if the worker is stuck, it may not react to
   * cancelled requests. The default and maximum values depend on the type of request: * For HTTP
   * tasks, the default is 10 minutes. The deadline must be in the interval [15 seconds, 30
   * minutes]. * For App Engine tasks, 0 indicates that the request has the default deadline. The
   * default deadline depends on the [scaling
   * type](https://cloud.google.com/appengine/docs/standard/go/how-instances-are-managed#instance_scaling)
   * of the service: 10 minutes for standard apps with automatic scaling, 24 hours for standard apps
   * with manual and basic scaling, and 60 minutes for flex apps. If the request deadline is set, it
   * must be in the interval [15 seconds, 24 hours 15 seconds]. Regardless of the task's
   * `dispatch_deadline`, the app handler will not run for longer than than the service's timeout.
   * We recommend setting the `dispatch_deadline` to at most a few seconds more than the app
   * handler's timeout. For more information see
   * [Timeouts](https://cloud.google.com/tasks/docs/creating-appengine-handlers#timeouts). The value
   * must be given as a string that indicates the length of time (in seconds) followed by `s` (for
   * "seconds"). For more information on the format, see the documentation for
   * [Duration](https://protobuf.dev/reference/protobuf/google.protobuf/#duration).
   * `dispatch_deadline` will be truncated to the nearest millisecond. The deadline is an
   * approximate deadline.
   */
  dispatchDeadline?: string;
  /**
   * Output only. The number of attempts dispatched. This count includes attempts which have been
   * dispatched but haven't received a response.
   */
  dispatchCount?: number;
  /**
   * Output only. The status of the task's first attempt. Only dispatch_time will be set. The other
   * Attempt information is not retained by Cloud Tasks.
   */
  firstAttempt?: Attempt3;
  /** Output only. The status of the task's last attempt. */
  lastAttempt?: Attempt1;
  /**
   * The time when the task is scheduled to be attempted or retried. `schedule_time` will be
   * truncated to the nearest microsecond.
   */
  scheduleTime?: string;
  /** HTTP request that is sent to the worker. An HTTP task is a task that has HttpRequest set. */
  httpRequest?: HttpRequest2;
  /**
   * HTTP request that is sent to the App Engine app handler. An App Engine task is a task that has
   * AppEngineHttpRequest set.
   */
  appEngineHttpRequest?: AppEngineHttpRequest2;
  /**
   * Optionally caller-specified in CreateTask. The task name. The task name must have the following
   * format: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID` *
   * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), or
   * periods (.). For more information, see [Identifying
   * projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects)
   * * `LOCATION_ID` is the canonical ID for the task's location. The list of available locations
   * can be obtained by calling ListLocations. For more information, see
   * https://cloud.google.com/about/locations/. * `QUEUE_ID` can contain letters ([A-Za-z]), numbers
   * ([0-9]), or hyphens (-). The maximum length is 100 characters. * `TASK_ID` can contain only
   * letters ([A-Za-z]), numbers ([0-9]), hyphens (-), or underscores (_). The maximum length is 500
   * characters.
   */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const task3Schema: Schema<Task3> = s.object<Task3>(
  {
    view: s.optional(s.lazy(() => viewSchema)),
    createTime: s.optional(s.string()),
    responseCount: s.optional(s.int()),
    retryConfig: s.optional(s.lazy(() => retryConfig3Schema)),
    dispatchDeadline: s.optional(s.string()),
    dispatchCount: s.optional(s.int()),
    firstAttempt: s.optional(s.lazy(() => attempt3Schema)),
    lastAttempt: s.optional(s.lazy(() => attempt1Schema)),
    scheduleTime: s.optional(s.string()),
    httpRequest: s.optional(s.lazy(() => httpRequest2Schema)),
    appEngineHttpRequest: s.optional(s.lazy(() => appEngineHttpRequest2Schema)),
    name: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
