import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RunnerTasksResponse = {
  /** Number of unclaimed tasks for the resource class */
  unclaimedTaskCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runnerTasksResponseSchema: Schema<RunnerTasksResponse> = s.object<RunnerTasksResponse>(
  {
    unclaimedTaskCount: s.optional(s.int()),
    _keysMap: {
      unclaimedTaskCount: "unclaimed_task_count",
    },
  },
  { additionalProperties: s.json() },
);
