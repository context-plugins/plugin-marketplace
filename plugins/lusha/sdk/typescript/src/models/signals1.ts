import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { filterByDepartmentSchema, type FilterByDepartment } from "./filter-by-department.js";
import { filterByLocationSchema, type FilterByLocation } from "./filter-by-location.js";

export type Signals1 = {
  types?: string[];
  startDate?: string;
  filterByLocation?: FilterByLocation[];
  filterByDepartment?: FilterByDepartment[];
  /**
   * Refines linkedinActivityIntent results by Bombora intent category. Applied only when
   * linkedinActivityIntent is present in `types` (or selected via allSignals). Omit to match all
   * categories. See GET /v3/companies/signals/filters/intentCategories for the full list of valid
   * values.
   */
  filterByIntentCategory?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const signals1Schema: Schema<Signals1> = s.object<Signals1>(
  {
    types: s.optional(s.array(s.string())),
    startDate: s.optional(s.dateOnly()),
    filterByLocation: s.optional(s.array(s.lazy(() => filterByLocationSchema))),
    filterByDepartment: s.optional(s.array(s.lazy(() => filterByDepartmentSchema))),
    filterByIntentCategory: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
