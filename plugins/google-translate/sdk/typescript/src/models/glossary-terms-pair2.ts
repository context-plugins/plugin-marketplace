import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { glossaryTerm1Schema, type GlossaryTerm1 } from "./glossary-term1.js";
import { glossaryTerm2Schema, type GlossaryTerm2 } from "./glossary-term2.js";

/** Used for an unidirectional glossary. */
export type GlossaryTermsPair2 = {
  /** The source term is the term that will get match in the text, */
  sourceTerm?: GlossaryTerm1;
  /** The term that will replace the match source term. */
  targetTerm?: GlossaryTerm2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const glossaryTermsPair2Schema: Schema<GlossaryTermsPair2> = s.object<GlossaryTermsPair2>(
  {
    sourceTerm: s.optional(s.lazy(() => glossaryTerm1Schema)),
    targetTerm: s.optional(s.lazy(() => glossaryTerm2Schema)),
  },
  { additionalProperties: s.json() },
);
