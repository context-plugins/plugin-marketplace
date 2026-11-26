import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Prediction system that detects the intent.
 *
 * * `DIRECT`—Utterance search or an exact match
 * * `CORE_NLP`—Third-party Natural Language Processing (NLP)
 * * `EINSTEIN_NLP`—Einstein NLP
 */
export const IntentSource = {
  Direct: "DIRECT",
  CoreNlp: "CORE_NLP",
  EinsteinNlp: "EINSTEIN_NLP",
} as const;
export type IntentSource = (typeof IntentSource)[keyof typeof IntentSource] | (string & {});

export const intentSourceSchema: EnumSchema<IntentSource> = s.enumOf<IntentSource>(IntentSource);
