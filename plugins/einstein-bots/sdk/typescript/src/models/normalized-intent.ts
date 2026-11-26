import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { intentSourceSchema, type IntentSource } from "./intent-source.js";

export type NormalizedIntent = {
  /** Name or ID of the intent. */
  label: string;
  /** Probability number that the AI assigns to this intent. */
  confidenceScore: number;
  /**
   * Prediction system that detects the intent.
   *
   * * `DIRECT`—Utterance search or an exact match
   * * `CORE_NLP`—Third-party Natural Language Processing (NLP)
   * * `EINSTEIN_NLP`—Einstein NLP
   */
  intentSource: IntentSource;
};

export const normalizedIntentSchema: Schema<NormalizedIntent> = s.object<NormalizedIntent>({
  label: s.string(),
  confidenceScore: s.float64(),
  intentSource: intentSourceSchema,
});
