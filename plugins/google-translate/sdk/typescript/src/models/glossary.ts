import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { glossaryInputConfig2Schema, type GlossaryInputConfig2 } from "./glossary-input-config2.js";
import { languageCodePairSchema, type LanguageCodePair } from "./language-code-pair.js";
import { languageCodesSetSchema, type LanguageCodesSet } from "./language-codes-set.js";

/** Represents a glossary built from user-provided data. */
export type Glossary = {
  /** Output only. When CreateGlossary was called. */
  submitTime?: string;
  /** Output only. When the glossary creation was finished. */
  endTime?: string;
  /** Used with equivalent term set glossaries. */
  languageCodesSet?: LanguageCodesSet;
  /** Optional. The display name of the glossary. */
  displayName?: string;
  /**
   * Required. Provides examples to build the glossary from. Total glossary must not exceed 10M
   * Unicode codepoints.
   */
  inputConfig?: GlossaryInputConfig2;
  /** Output only. The number of entries defined in the glossary. */
  entryCount?: number;
  /**
   * Identifier. The resource name of the glossary. Glossary names have the form
   * `projects/{project-number-or-id}/locations/{location-id}/glossaries/{glossary-id}`.
   */
  name?: string;
  /** Used with unidirectional glossaries. */
  languagePair?: LanguageCodePair;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const glossarySchema: Schema<Glossary> = s.object<Glossary>(
  {
    submitTime: s.optional(s.string()),
    endTime: s.optional(s.string()),
    languageCodesSet: s.optional(s.lazy(() => languageCodesSetSchema)),
    displayName: s.optional(s.string()),
    inputConfig: s.optional(s.lazy(() => glossaryInputConfig2Schema)),
    entryCount: s.optional(s.int()),
    name: s.optional(s.string()),
    languagePair: s.optional(s.lazy(() => languageCodePairSchema)),
  },
  { additionalProperties: s.json() },
);
