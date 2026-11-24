import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DecisionEngineErrorResponseError = {
  /** Why the request failed. */
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const decisionEngineErrorResponseErrorSchema: Schema<DecisionEngineErrorResponseError> =
  s.object<DecisionEngineErrorResponseError>(
    {
      message: s.string(),
    },
    { additionalProperties: s.json() },
  );
