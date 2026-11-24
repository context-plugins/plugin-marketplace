import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { includeSchema, type Include } from "./include.js";

export type CompanyFilters = {
  include?: Include;
  /** Same structure as include, for exclusion filters */
  exclude?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyFiltersSchema: Schema<CompanyFilters> = s.object<CompanyFilters>(
  {
    include: s.optional(s.lazy(() => includeSchema)),
    exclude: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
