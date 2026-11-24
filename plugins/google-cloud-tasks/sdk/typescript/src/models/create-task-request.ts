import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { responseViewSchema, type ResponseView } from "./response-view.js";
import { task2Schema, type Task2 } from "./task2.js";

/** Request message for CreateTask. */
export type CreateTaskRequest = {
  /**
   * The response_view specifies which subset of the Task will be returned. By default response_view
   * is BASIC; not all information is retrieved by default because some data, such as payloads,
   * might be desirable to return only when needed because of its large size or because of the
   * sensitivity of data that it contains. Authorization for FULL requires
   * `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/) permission on the Task
   * resource.
   */
  responseView?: ResponseView;
  /**
   * Required. The queue name. For example:
   * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID` The queue must already exist.
   */
  parent?: string;
  /**
   * Required. The task to add. Task names have the following format:
   * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`. The user can
   * optionally specify a task name. If a name is not specified then the system will generate a
   * random unique task id, which will be set in the task returned in the response. If schedule_time
   * is not set or is in the past then Cloud Tasks will set it to the current time. Task
   * De-duplication: Explicitly specifying a task ID enables task de-duplication. If a task's ID is
   * identical to that of an existing task or a task that was deleted or executed recently then the
   * call will fail with ALREADY_EXISTS. The IDs of deleted tasks are not immediately available for
   * reuse. It can take up to 24 hours (or 9 days if the task's queue was created using a queue.yaml
   * or queue.xml) for the task ID to be released and made available again. Because there is an
   * extra lookup cost to identify duplicate task names, these CreateTask calls have significantly
   * increased latency. Using hashed strings for the task id or for the prefix of the task id is
   * recommended. Choosing task ids that are sequential or have sequential prefixes, for example
   * using a timestamp, causes an increase in latency and error rates in all task commands. The
   * infrastructure relies on an approximately uniform distribution of task ids to store and serve
   * tasks efficiently.
   */
  task?: Task2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createTaskRequestSchema: Schema<CreateTaskRequest> = s.object<CreateTaskRequest>(
  {
    responseView: s.optional(s.lazy(() => responseViewSchema)),
    parent: s.optional(s.string()),
    task: s.optional(s.lazy(() => task2Schema)),
  },
  { additionalProperties: s.json() },
);
