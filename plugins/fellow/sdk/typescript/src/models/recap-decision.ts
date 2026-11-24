import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RecapDecision = {
  timestamp: number;
  text: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recapDecisionSchema: Schema<RecapDecision> = s.object<RecapDecision>(
  {
    timestamp: s.int(),
    text: s.string(),
  },
  { additionalProperties: s.json() },
);
