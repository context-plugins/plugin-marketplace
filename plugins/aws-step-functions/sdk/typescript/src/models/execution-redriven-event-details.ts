import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ExecutionRedrivenEventDetails = {
  /**
   * The number of times you've redriven an execution. If you have not yet redriven an execution,
   * the redriveCount is 0. This count is not updated for redrives that failed to start or are
   * pending to be redriven.
   */
  redriveCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const executionRedrivenEventDetailsSchema: Schema<ExecutionRedrivenEventDetails> =
  s.object<ExecutionRedrivenEventDetails>(
    {
      redriveCount: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
