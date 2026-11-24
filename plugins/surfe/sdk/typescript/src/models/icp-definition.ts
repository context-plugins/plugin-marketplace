import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companyFiltersSchema, type CompanyFilters } from "./company-filters.js";

export type IcpDefinition = {
  name?: string;
  /** Company-based filters. */
  filters?: CompanyFilters;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const icpDefinitionSchema: Schema<IcpDefinition> = s.object<IcpDefinition>(
  {
    name: s.optional(s.string()),
    filters: s.optional(s.lazy(() => companyFiltersSchema)),
  },
  { additionalProperties: s.json() },
);
