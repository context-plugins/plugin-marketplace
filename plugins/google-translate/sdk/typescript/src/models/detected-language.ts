import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The response message for language detection. */
export type DetectedLanguage = {
  /** The confidence of the detection result for this language. */
  confidence?: number;
  /** The ISO-639 language code of the source content in the request, detected automatically. */
  languageCode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detectedLanguageSchema: Schema<DetectedLanguage> = s.object<DetectedLanguage>(
  {
    confidence: s.optional(s.float64()),
    languageCode: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
