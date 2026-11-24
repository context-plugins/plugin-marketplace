import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Used with equivalent term set glossaries. */
export type LanguageCodesSet = {
  /**
   * Optional. The ISO-639 language code(s) for terms defined in the glossary. All entries are
   * unique. The list contains at least two entries. Expected to be an exact match for
   * GlossaryTerm.language_code.
   */
  languageCodes?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const languageCodesSetSchema: Schema<LanguageCodesSet> = s.object<LanguageCodesSet>(
  {
    languageCodes: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
