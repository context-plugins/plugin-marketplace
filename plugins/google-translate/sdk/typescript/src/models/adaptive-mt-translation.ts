import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** An AdaptiveMt translation. */
export type AdaptiveMtTranslation = {
  /** Output only. The translated text. */
  translatedText?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adaptiveMtTranslationSchema: Schema<AdaptiveMtTranslation> = s.object<AdaptiveMtTranslation>(
  {
    translatedText: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
