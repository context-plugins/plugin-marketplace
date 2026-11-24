import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { intentConfidenceSchema, type IntentConfidence } from "./intent-confidence.js";

export type PredictedIntent = {
  /** The name of the intent that Amazon Lex suggests satisfies the user's intent. */
  intentName?: string;
  nluIntentConfidence?: IntentConfidence;
  /** The slot and slot values associated with the predicted intent. */
  slots?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const predictedIntentSchema: Schema<PredictedIntent> = s.object<PredictedIntent>(
  {
    intentName: s.optional(s.string()),
    nluIntentConfidence: s.optional(s.lazy(() => intentConfidenceSchema)),
    slots: s.optional(s.record(s.string(), s.string())),
  },
  { additionalProperties: s.json() },
);
