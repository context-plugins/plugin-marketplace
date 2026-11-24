import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Configures transliteration feature on top of translation. */
export type TransliterationConfig = {
  /** If true, source text in romanized form can be translated to the target language. */
  enableTransliteration?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transliterationConfigSchema: Schema<TransliterationConfig> = s.object<TransliterationConfig>(
  {
    enableTransliteration: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
