import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { facetFilterValueSchema, type FacetFilterValue } from "./facet-filter-value.js";

export type FacetFilter = {
  fieldName?: string;
  /**
   * Within a single FacetFilter, the values are to be treated like an OR. For example, fieldName
   * type with values [EQUALS Presentation, EQUALS Spreadsheet] means we want to show a document if
   * it's a Presentation OR a Spreadsheet.
   */
  values?: FacetFilterValue[];
  /**
   * Indicates the value of a facet, if any, that the given facet is grouped under. This is only
   * used for nested facets, for example, fieldName could be owner and groupName would be
   * Spreadsheet if showing all owners for spreadsheets as a nested facet.
   */
  groupName?: string;
};

export const facetFilterSchema: Schema<FacetFilter> = s.object<FacetFilter>({
  fieldName: s.optional(s.string()),
  values: s.optional(s.array(s.lazy(() => facetFilterValueSchema))),
  groupName: s.optional(s.string()),
});
