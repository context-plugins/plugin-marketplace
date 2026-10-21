import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Reference to a source document cited in a response */
export type CitationReference = {
  /** ID of the citation record */
  citationId?: string;
  /** How relevant this citation is to the query (0-1) */
  relevanceScore?: number;
  /** Relevant excerpt from the source document */
  excerpt?: string;
  /** Additional context around the citation */
  context?: string;
};

export const citationReferenceSchema: Schema<CitationReference> = s.object<CitationReference>({
  citationId: s.optional(s.string()),
  relevanceScore: s.optional(s.float64()),
  excerpt: s.optional(s.string()),
  context: s.optional(s.string()),
});
