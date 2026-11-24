import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

/**
 * Minimal poll target: just the run's status. Poll this until terminal (cheap indexed lookup, tiny
 * payload — never the task/result text), then fetch the full RunSummary once via GET /runs/{id}.
 * Mirrors v2's GET /tasks/{id}/status.
 */
export type RunStatusResponse = {
  status: Status;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runStatusResponseSchema: Schema<RunStatusResponse> = s.object<RunStatusResponse>(
  {
    status: statusSchema,
  },
  { additionalProperties: s.json() },
);
