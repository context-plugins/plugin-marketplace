import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Represents a single glossary term */
export type GlossaryTerm = {
  /** The text for the glossary term. */
  text?: string;
  /** The language for this glossary term. */
  languageCode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const glossaryTermSchema: Schema<GlossaryTerm> = s.object<GlossaryTerm>(
  {
    text: s.optional(s.string()),
    languageCode: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
