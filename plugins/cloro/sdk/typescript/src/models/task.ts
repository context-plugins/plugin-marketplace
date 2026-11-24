import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";
import { taskType1Schema, type TaskType1 } from "./task-type1.js";

export type Task = {
  /** Unique task identifier. */
  id: string;
  /** The AI provider for this task. */
  taskType: TaskType1;
  /** Current task status. */
  status: Status;
  /** Task priority level (1-10). Higher numbers are processed first. Defaults to 1. */
  priority: number;
  /** Timestamp when the task was created. */
  createdAt: Date;
  /**
   * Processing time in milliseconds, from first pickup to the final outcome. Excludes the initial
   * queue wait, but on a retried task covers every attempt including the backoff between them. Null
   * while the task is `QUEUED` or `PROCESSING`, and on a task that failed before processing
   * started.
   */
  latencyMs?: number | null;
  /** The idempotency key if one was provided. */
  idempotencyKey?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const taskProperties: s.Shape<Task> = {
  id: s.string(),
  taskType: taskType1Schema,
  status: statusSchema,
  priority: s.int(),
  createdAt: s.dateTime(),
  latencyMs: s.optionalNullable(s.int()),
  idempotencyKey: s.optionalNullable(s.string()),
};

export const taskInternalSchema: Schema<Task> = s.object<Task>(taskProperties, {
  additionalProperties: s.json(),
});

export const taskSchema: Schema<Task> = s.lazySchema(() =>
  s.object<Task>(
    {
      ...taskProperties,
      priority: s.int().check(s.gte(1), s.lte(10)),
    },
    { additionalProperties: s.json() },
  ),
);
