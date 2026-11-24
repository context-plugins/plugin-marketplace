import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { asyncTaskCreditsSchema, type AsyncTaskCredits } from "./async-task-credits.js";
import {
  asyncTaskSummaryInternalSchema,
  asyncTaskSummarySchema,
  type AsyncTaskSummary,
} from "./async-task-summary.js";

export type AsyncTaskCreateResponse = {
  success: boolean;
  /** Common task summary fields shared across async task responses. */
  task: AsyncTaskSummary;
  /** Credit information for an async task. */
  credits: AsyncTaskCredits;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const asyncTaskCreateResponseProperties: s.Shape<AsyncTaskCreateResponse> = {
  success: s.boolean(),
  task: asyncTaskSummaryInternalSchema,
  credits: asyncTaskCreditsSchema,
};

export const asyncTaskCreateResponseInternalSchema: Schema<AsyncTaskCreateResponse> =
  s.object<AsyncTaskCreateResponse>(asyncTaskCreateResponseProperties, { additionalProperties: s.json() });

export const asyncTaskCreateResponseSchema: Schema<AsyncTaskCreateResponse> = s.lazySchema(() =>
  s.object<AsyncTaskCreateResponse>(
    {
      ...asyncTaskCreateResponseProperties,
      task: asyncTaskSummarySchema,
    },
    { additionalProperties: s.json() },
  ),
);
