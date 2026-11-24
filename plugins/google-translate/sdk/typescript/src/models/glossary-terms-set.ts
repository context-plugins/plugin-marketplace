import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { glossaryTermSchema, type GlossaryTerm } from "./glossary-term.js";

/**
 * Represents a single entry for an equivalent term set glossary. This is used for equivalent term
 * sets where each term can be replaced by the other terms in the set.
 */
export type GlossaryTermsSet = {
  /** Each term in the set represents a term that can be replaced by the other terms. */
  terms?: GlossaryTerm[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const glossaryTermsSetSchema: Schema<GlossaryTermsSet> = s.object<GlossaryTermsSet>(
  {
    terms: s.optional(s.array(s.lazy(() => glossaryTermSchema))),
  },
  { additionalProperties: s.json() },
);
