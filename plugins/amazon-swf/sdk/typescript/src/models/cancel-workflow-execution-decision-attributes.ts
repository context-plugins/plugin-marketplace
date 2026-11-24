import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CancelWorkflowExecutionDecisionAttributes = {
  /** Details of the cancellation. */
  details?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cancelWorkflowExecutionDecisionAttributesSchema: Schema<CancelWorkflowExecutionDecisionAttributes> =
  s.object<CancelWorkflowExecutionDecisionAttributes>(
    {
      details: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
