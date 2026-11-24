import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A single romanization response. */
export type Romanization = {
  /**
   * The ISO-639 language code of source text in the initial request, detected automatically, if no
   * source language was passed within the initial request. If the source language was passed,
   * auto-detection of the language does not occur and this field is empty.
   */
  detectedLanguageCode?: string;
  /**
   * Romanized text. If an error occurs during romanization, this field might be excluded from the
   * response.
   */
  romanizedText?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const romanizationSchema: Schema<Romanization> = s.object<Romanization>(
  {
    detectedLanguageCode: s.optional(s.string()),
    romanizedText: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
