import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { rangeSchema, type Range } from "./range.js";

/** Company-based filters. */
export type CompanyFilters = {
  industries?: string[];
  employeeCount?: Range;
  revenue?: Range;
  countries?: string[];
  domains?: string[];
  keywords?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyFiltersSchema: Schema<CompanyFilters> = s.object<CompanyFilters>(
  {
    industries: s.optional(s.array(s.string())),
    employeeCount: s.optional(s.lazy(() => rangeSchema)),
    revenue: s.optional(s.lazy(() => rangeSchema)),
    countries: s.optional(s.array(s.string())),
    domains: s.optional(s.array(s.string())),
    keywords: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
