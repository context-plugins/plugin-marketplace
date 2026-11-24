import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { glossaryTermsPair2Schema, type GlossaryTermsPair2 } from "./glossary-terms-pair2.js";
import { glossaryTermsSet2Schema, type GlossaryTermsSet2 } from "./glossary-terms-set2.js";

/** Represents a single entry in a glossary. */
export type GlossaryEntry = {
  /**
   * Identifier. The resource name of the entry. Format:
   * `projects/*&#47;locations/*&#47;glossaries/*&#47;glossaryEntries/*`
   */
  name?: string;
  /** Describes the glossary entry. */
  description?: string;
  /** Used for an equivalent term sets glossary. */
  termsSet?: GlossaryTermsSet2;
  /** Used for an unidirectional glossary. */
  termsPair?: GlossaryTermsPair2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const glossaryEntrySchema: Schema<GlossaryEntry> = s.object<GlossaryEntry>(
  {
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    termsSet: s.optional(s.lazy(() => glossaryTermsSet2Schema)),
    termsPair: s.optional(s.lazy(() => glossaryTermsPair2Schema)),
  },
  { additionalProperties: s.json() },
);
