import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Optional. Transliteration to be applied. */
export type TransliterationConfig2 = {
  /** If true, source text in romanized form can be translated to the target language. */
  enableTransliteration?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transliterationConfig2Schema: Schema<TransliterationConfig2> = s.object<TransliterationConfig2>(
  {
    enableTransliteration: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
