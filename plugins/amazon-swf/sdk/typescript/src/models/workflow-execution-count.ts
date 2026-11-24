import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WorkflowExecutionCount = {
  /** The number of workflow executions. */
  count: number;
  /**
   * If set to true, indicates that the actual count was more than the maximum supported by this API
   * and the count returned is the truncated value.
   */
  truncated?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workflowExecutionCountSchema: Schema<WorkflowExecutionCount> = s.object<WorkflowExecutionCount>(
  {
    count: s.int(),
    truncated: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
