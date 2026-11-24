import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DominantLanguage = {
  /**
   * The RFC 5646 language code for the dominant language. For more information about RFC 5646, see
   * Tags for Identifying Languages on the IETF Tools web site.
   */
  languageCode?: string;
  /** The level of confidence that Amazon Comprehend has in the accuracy of the detection. */
  score?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dominantLanguageSchema: Schema<DominantLanguage> = s.object<DominantLanguage>(
  {
    languageCode: s.optional(s.string()),
    score: s.optional(s.float64()),
    _keysMap: {
      languageCode: "LanguageCode",
      score: "Score",
    },
  },
  { additionalProperties: s.json() },
);
