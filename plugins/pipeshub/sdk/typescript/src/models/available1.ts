import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { filterOptionSchema, type FilterOption } from "./filter-option.js";

/** Populated when `include=availableFilters`; otherwise `null`. */
export type Available1 = {
  nodeTypes: FilterOption[];
  recordTypes: FilterOption[];
  origins: FilterOption[];
  connectors: FilterOption[];
  indexingStatus: FilterOption[];
  sortBy: FilterOption[];
  sortOrder: FilterOption[];
};

export const available1Schema: Schema<Available1> = s.object<Available1>({
  nodeTypes: s.array(s.lazy(() => filterOptionSchema)),
  recordTypes: s.array(s.lazy(() => filterOptionSchema)),
  origins: s.array(s.lazy(() => filterOptionSchema)),
  connectors: s.array(s.lazy(() => filterOptionSchema)),
  indexingStatus: s.array(s.lazy(() => filterOptionSchema)),
  sortBy: s.array(s.lazy(() => filterOptionSchema)),
  sortOrder: s.array(s.lazy(() => filterOptionSchema)),
});
