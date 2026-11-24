import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DecisionEngineFlowMessages500Error = {
  /** Why the request failed. */
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const decisionEngineFlowMessages500ErrorSchema: Schema<DecisionEngineFlowMessages500Error> =
  s.object<DecisionEngineFlowMessages500Error>(
    {
      message: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
