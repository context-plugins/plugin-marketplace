import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AssignedVariablesDetails = {
  /**
   * Indicates whether assigned variables were truncated in the response. Always false for API
   * calls. In CloudWatch logs, the value will be true if the data is truncated due to size limits.
   */
  truncated?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const assignedVariablesDetailsSchema: Schema<AssignedVariablesDetails> =
  s.object<AssignedVariablesDetails>(
    {
      truncated: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
