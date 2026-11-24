import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PendingTaskCount = {
  /** The number of tasks in the task list. */
  count: number;
  /**
   * If set to true, indicates that the actual count was more than the maximum supported by this API
   * and the count returned is the truncated value.
   */
  truncated?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pendingTaskCountSchema: Schema<PendingTaskCount> = s.object<PendingTaskCount>(
  {
    count: s.int(),
    truncated: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
