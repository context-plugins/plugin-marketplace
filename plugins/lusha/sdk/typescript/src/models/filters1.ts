import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companyFiltersSchema, type CompanyFilters } from "./company-filters.js";

export type Filters1 = {
  companies?: CompanyFilters;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const filters1Schema: Schema<Filters1> = s.object<Filters1>(
  {
    companies: s.optional(s.lazy(() => companyFiltersSchema)),
  },
  { additionalProperties: s.json() },
);
