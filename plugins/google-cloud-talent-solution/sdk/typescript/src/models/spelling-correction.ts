import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Spell check result. */
export type SpellingCorrection = {
  /** Indicates if the query was corrected by the spell checker. */
  corrected?: boolean;
  /** Correction output consisting of the corrected keyword string. */
  correctedText?: string;
  /**
   * Corrected output with html tags to highlight the corrected words. Corrected words are called
   * out with the "*...*" html tags. For example, the user input query is "software enginear", where
   * the second word, "enginear," is incorrect. It should be "engineer". When spelling correction is
   * enabled, this value is "software *engineer*".
   */
  correctedHtml?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const spellingCorrectionSchema: Schema<SpellingCorrection> = s.object<SpellingCorrection>(
  {
    corrected: s.optional(s.boolean()),
    correctedText: s.optional(s.string()),
    correctedHtml: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
