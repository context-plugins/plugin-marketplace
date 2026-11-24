import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompleteWorkflowExecutionDecisionAttributes = {
  /** The result of the workflow execution. The form of the result is implementation defined. */
  result?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const completeWorkflowExecutionDecisionAttributesSchema: Schema<CompleteWorkflowExecutionDecisionAttributes> =
  s.object<CompleteWorkflowExecutionDecisionAttributes>(
    {
      result: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
