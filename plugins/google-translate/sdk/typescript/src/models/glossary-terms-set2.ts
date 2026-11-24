import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { glossaryTermSchema, type GlossaryTerm } from "./glossary-term.js";

/** Used for an equivalent term sets glossary. */
export type GlossaryTermsSet2 = {
  /** Each term in the set represents a term that can be replaced by the other terms. */
  terms?: GlossaryTerm[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const glossaryTermsSet2Schema: Schema<GlossaryTermsSet2> = s.object<GlossaryTermsSet2>(
  {
    terms: s.optional(s.array(s.lazy(() => glossaryTermSchema))),
  },
  { additionalProperties: s.json() },
);
