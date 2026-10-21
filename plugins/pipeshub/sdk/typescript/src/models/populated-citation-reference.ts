import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { citationSchema, type Citation } from "./citation.js";

/**
 * A message's citation reference after the handler populates it: the stored reference fields, with
 * `citationId` as the id and the cited document under `citationData`.
 */
export type PopulatedCitationReference = {
  /** ID of the citation record */
  citationId?: string;
  /** How relevant this citation is to the query (0-1) */
  relevanceScore?: number;
  /** Relevant excerpt from the source document */
  excerpt?: string;
  /** Additional context around the citation */
  context?: string;
  /**
   * A populated citation document. Represents a single chunk of source content (e.g. a passage from
   * a document or record) referenced by an AI response, together with its provenance metadata.
   */
  citationData?: Citation;
};

export const populatedCitationReferenceSchema: Schema<PopulatedCitationReference> =
  s.object<PopulatedCitationReference>({
    citationId: s.optional(s.string()),
    relevanceScore: s.optional(s.float64()),
    excerpt: s.optional(s.string()),
    context: s.optional(s.string()),
    citationData: s.optional(s.lazy(() => citationSchema)),
  });
