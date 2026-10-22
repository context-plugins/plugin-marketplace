import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { facetFilterSchema, type FacetFilter } from "./facet-filter.js";

/**
 * Within a single FacetFilterSet, the filters are treated as AND. For example, owner Sumeet and
 * type Spreadsheet shows documents that are by Sumeet AND are Spreadsheets.
 */
export type FacetFilterSet = {
  filters?: FacetFilter[];
};

export const facetFilterSetSchema: Schema<FacetFilterSet> = s.object<FacetFilterSet>({
  filters: s.optional(s.array(s.lazy(() => facetFilterSchema))),
});
