import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { asyncTaskCreditsSchema, type AsyncTaskCredits } from "./async-task-credits.js";
import {
  asyncTaskSummaryInternalSchema,
  asyncTaskSummarySchema,
  type AsyncTaskSummary,
} from "./async-task-summary.js";
import { webhook1InternalSchema, webhook1Schema, type Webhook1 } from "./webhook1.js";

export type TaskStatusResponse = {
  /** Common task summary fields shared across async task responses. */
  task: AsyncTaskSummary;
  /** Credit information for an async task. */
  credits: AsyncTaskCredits;
  /**
   * Webhook delivery status. Present on `COMPLETED` and `FAILED` tasks created with a
   * `webhook.url`.
   */
  webhook?: Webhook1;
  /**
   * Present only when the task is `COMPLETED` or `FAILED`. For a `COMPLETED` task it is the
   * provider's result; for a `FAILED` task it is the error, `{ "error": { "code", "message",
   * "details" } }`, with `details` only when there is extra context.
   */
  response?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const taskStatusResponseProperties: s.Shape<TaskStatusResponse> = {
  task: asyncTaskSummaryInternalSchema,
  credits: asyncTaskCreditsSchema,
  webhook: s.optional(s.lazy(() => webhook1InternalSchema)),
  response: s.optional(s.record(s.string(), s.unknown())),
};

export const taskStatusResponseInternalSchema: Schema<TaskStatusResponse> = s.object<TaskStatusResponse>(
  taskStatusResponseProperties,
  { additionalProperties: s.json() },
);

export const taskStatusResponseSchema: Schema<TaskStatusResponse> = s.lazySchema(() =>
  s.object<TaskStatusResponse>(
    {
      ...taskStatusResponseProperties,
      task: asyncTaskSummarySchema,
      webhook: s.optional(s.lazy(() => webhook1Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
