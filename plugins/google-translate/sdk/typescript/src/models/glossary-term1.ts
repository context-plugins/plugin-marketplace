import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The source term is the term that will get match in the text, */
export type GlossaryTerm1 = {
  /** The text for the glossary term. */
  text?: string;
  /** The language for this glossary term. */
  languageCode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const glossaryTerm1Schema: Schema<GlossaryTerm1> = s.object<GlossaryTerm1>(
  {
    text: s.optional(s.string()),
    languageCode: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
