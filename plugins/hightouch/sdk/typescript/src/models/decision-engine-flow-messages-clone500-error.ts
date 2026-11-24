import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DecisionEngineFlowMessagesClone500Error = {
  /** Why the request failed. */
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const decisionEngineFlowMessagesClone500ErrorSchema: Schema<DecisionEngineFlowMessagesClone500Error> =
  s.object<DecisionEngineFlowMessagesClone500Error>(
    {
      message: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
