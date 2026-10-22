import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { facetFilterSchema, type FacetFilter } from "./facet-filter.js";

export type PinDocumentMutableProperties = {
  /** The query strings for which the pinned result will show. */
  queries?: string[];
  /**
   * Filters which restrict who should see the pinned document. Values are taken from the
   * corresponding filters in people search.
   */
  audienceFilters?: FacetFilter[];
};

export const pinDocumentMutablePropertiesSchema: Schema<PinDocumentMutableProperties> =
  s.object<PinDocumentMutableProperties>({
    queries: s.optional(s.array(s.string())),
    audienceFilters: s.optional(s.array(s.lazy(() => facetFilterSchema))),
  });
