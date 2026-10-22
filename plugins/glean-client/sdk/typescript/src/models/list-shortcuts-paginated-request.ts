import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { facetFilterSchema, type FacetFilter } from "./facet-filter.js";
import { includeField3Schema, type IncludeField3 } from "./include-field3.js";
import { sortOptionsSchema, type SortOptions } from "./sort-options.js";

export type ListShortcutsPaginatedRequest = {
  /** Array of fields/data to be included in response that are not included by default */
  includeFields?: IncludeField3[];
  pageSize: number;
  /**
   * A token specifying the position in the overall results to start at. Received from the endpoint
   * and iterated back. Currently being used as page no (as we implement offset pagination)
   */
  cursor?: string;
  /**
   * A list of filters for the query. An AND is assumed between different filters. We support
   * filters on Go Link name, author, department and type.
   */
  filters?: FacetFilter[];
  sort?: SortOptions;
  /**
   * Search query that should be a substring in atleast one of the fields (alias , inputAlias,
   * destinationUrl, description). Empty query does not filter shortcuts.
   */
  query?: string;
};

export const listShortcutsPaginatedRequestSchema: Schema<ListShortcutsPaginatedRequest> =
  s.object<ListShortcutsPaginatedRequest>({
    includeFields: s.optional(s.array(s.lazy(() => includeField3Schema))),
    pageSize: s.int(),
    cursor: s.optional(s.string()),
    filters: s.optional(s.array(s.lazy(() => facetFilterSchema))),
    sort: s.optional(s.lazy(() => sortOptionsSchema)),
    query: s.optional(s.string()),
  });
