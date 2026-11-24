import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskRun2Schema, type TaskRun2 } from "./task-run2.js";
import { eventIdSchema, type EventId } from "./unions/event-id.js";
import {
  input1ParallelAiTasksApiInternalSchema,
  input1ParallelAiTasksApiSchema,
  type Input1ParallelAiTasksApi,
} from "./unions/input1-parallel-ai-tasks-api.js";
import {
  output1ParallelAiTasksApiSchema,
  type Output1ParallelAiTasksApi,
} from "./unions/output1-parallel-ai-tasks-api.js";

/**
 * Event when a task run transitions to a non-active status.
 *
 * May indicate completion, cancellation, or failure.
 */
export type TaskRunEvent = {
  /** Event type; always 'task_run.state'. @default "task_run.state" */
  type?: "task_run.state";
  /** Cursor to resume the event stream. Always empty for non Task Group runs. */
  eventId: EventId;
  /** Input to the run; included only if requested. */
  input?: Input1ParallelAiTasksApi;
  /** Task run object. */
  run: TaskRun2;
  /** Output from the run; included only if requested and if status == `completed`. */
  output?: Output1ParallelAiTasksApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const taskRunEventProperties: s.Shape<TaskRunEvent> = {
  type: s.defaulted(s.literal("task_run.state"), "task_run.state"),
  eventId: eventIdSchema,
  input: s.optional(s.lazy(() => input1ParallelAiTasksApiInternalSchema)),
  run: taskRun2Schema,
  output: s.optional(s.lazy(() => output1ParallelAiTasksApiSchema)),
  _keysMap: {
    eventId: "event_id",
  },
};

export const taskRunEventInternalSchema: Schema<TaskRunEvent> = s.object<TaskRunEvent>(
  taskRunEventProperties,
  { additionalProperties: s.json() },
);

export const taskRunEventSchema: Schema<TaskRunEvent> = s.lazySchema(() =>
  s.object<TaskRunEvent>(
    {
      ...taskRunEventProperties,
      input: s.optional(s.lazy(() => input1ParallelAiTasksApiSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
