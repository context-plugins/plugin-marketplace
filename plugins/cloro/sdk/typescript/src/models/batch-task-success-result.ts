import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { asyncTaskCreditsSchema, type AsyncTaskCredits } from "./async-task-credits.js";
import { taskInternalSchema, taskSchema, type Task } from "./task.js";

export type BatchTaskSuccessResult = {
  /** Indicates this task was created successfully. @default "True" */
  success?: "True";
  /** The zero-based position of this task in the original request array. */
  index: number;
  task: Task;
  /** Credit information for an async task. */
  credits: AsyncTaskCredits;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const batchTaskSuccessResultProperties: s.Shape<BatchTaskSuccessResult> = {
  success: s.defaulted(s.literal("True"), "True"),
  index: s.int(),
  task: taskInternalSchema,
  credits: asyncTaskCreditsSchema,
};

export const batchTaskSuccessResultInternalSchema: Schema<BatchTaskSuccessResult> =
  s.object<BatchTaskSuccessResult>(batchTaskSuccessResultProperties, { additionalProperties: s.json() });

export const batchTaskSuccessResultSchema: Schema<BatchTaskSuccessResult> = s.lazySchema(() =>
  s.object<BatchTaskSuccessResult>(
    {
      ...batchTaskSuccessResultProperties,
      task: taskSchema,
    },
    { additionalProperties: s.json() },
  ),
);
