import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The term that will replace the match source term. */
export type GlossaryTerm2 = {
  /** The text for the glossary term. */
  text?: string;
  /** The language for this glossary term. */
  languageCode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const glossaryTerm2Schema: Schema<GlossaryTerm2> = s.object<GlossaryTerm2>(
  {
    text: s.optional(s.string()),
    languageCode: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
