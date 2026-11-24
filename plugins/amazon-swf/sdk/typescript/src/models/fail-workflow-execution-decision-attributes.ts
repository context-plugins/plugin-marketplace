import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FailWorkflowExecutionDecisionAttributes = {
  /** A descriptive reason for the failure that may help in diagnostics. */
  reason?: string;
  /** Details of the failure. */
  details?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const failWorkflowExecutionDecisionAttributesSchema: Schema<FailWorkflowExecutionDecisionAttributes> =
  s.object<FailWorkflowExecutionDecisionAttributes>(
    {
      reason: s.optional(s.string()),
      details: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
