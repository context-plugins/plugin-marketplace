import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { facetFilterSchema, type FacetFilter } from "./facet-filter.js";

export type PinRequest = {
  /** The query strings for which the pinned result will show. */
  queries?: string[];
  /**
   * Filters which restrict who should see the pinned document. Values are taken from the
   * corresponding filters in people search.
   */
  audienceFilters?: FacetFilter[];
  /** The document to be pinned. */
  documentId?: string;
};

export const pinRequestSchema: Schema<PinRequest> = s.object<PinRequest>({
  queries: s.optional(s.array(s.string())),
  audienceFilters: s.optional(s.array(s.lazy(() => facetFilterSchema))),
  documentId: s.optional(s.string()),
});
