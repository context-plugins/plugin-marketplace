import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { facetFilterSetSchema, type FacetFilterSet } from "./facet-filter-set.js";

export type GetDocumentsByFacetsRequest = {
  /**
   * Filter results to one or more datasources (e.g. gmail, slack). All results are returned if
   * missing.
   */
  datasourcesFilter?: string[];
  /**
   * A list of facet filter sets that will be OR'ed together. An AND is assumed between different
   * filters in each set.
   */
  filterSets: FacetFilterSet[];
  /**
   * Pagination cursor. A previously received opaque token representing the position in the overall
   * results at which to start.
   */
  cursor?: string;
};

export const getDocumentsByFacetsRequestSchema: Schema<GetDocumentsByFacetsRequest> =
  s.object<GetDocumentsByFacetsRequest>({
    datasourcesFilter: s.optional(s.array(s.string())),
    filterSets: s.array(s.lazy(() => facetFilterSetSchema)),
    cursor: s.optional(s.string()),
  });
