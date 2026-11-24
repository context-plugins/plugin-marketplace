import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { intentModelingScoresSchema, type IntentModelingScores } from "./intent-modeling-scores.js";
import { status1Schema, type Status1 } from "./status1.js";

export type IntentData = {
  status?: Status1;
  domainUsed?: string;
  /** Company's top surging intent topics; "No Surging Topics" when empty */
  domainIntent?: string;
  intentModelingScores?: IntentModelingScores;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const intentDataSchema: Schema<IntentData> = s.object<IntentData>(
  {
    status: s.optional(s.lazy(() => status1Schema)),
    domainUsed: s.optional(s.string()),
    domainIntent: s.optional(s.string()),
    intentModelingScores: s.optional(s.lazy(() => intentModelingScoresSchema)),
    _keysMap: {
      domainUsed: "domain_used",
      domainIntent: "domain_intent",
      intentModelingScores: "intent_modeling_scores",
    },
  },
  { additionalProperties: s.json() },
);
