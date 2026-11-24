import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Result of an execution request submission. */
export type ExecutionRequestResult = {
  /** Unique identifier for tracking this execution request. */
  requestId?: string;
  /** Current status of the execution request. */
  status?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const executionRequestResultSchema: Schema<ExecutionRequestResult> = s.object<ExecutionRequestResult>(
  {
    requestId: s.optional(s.string()),
    status: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
