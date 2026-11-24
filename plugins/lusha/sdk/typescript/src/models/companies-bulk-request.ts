import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companyBulkRequestSchema, type CompanyBulkRequest } from "./company-bulk-request.js";
import { signal1Schema, type Signal1 } from "./signal1.js";
import { signalsFiltersSchema, type SignalsFilters } from "./signals-filters.js";

export type CompaniesBulkRequest = {
  companies: CompanyBulkRequest[];
  signals?: Signal1[];
  signalsStartDate?: string;
  /**
   * Optional filters to narrow signal results within the requested signal types.
   * - Multi-value filters use **OR** logic
   * - Filter values are **not** case-sensitive
   * - Unrecognized values are **silently ignored**
   * - `state` without `country` in `hiringByLocations` returns HTTP **400**
   */
  signalsFilters?: SignalsFilters;
  /** @default true */
  partialCompany?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companiesBulkRequestSchema: Schema<CompaniesBulkRequest> = s.object<CompaniesBulkRequest>(
  {
    companies: s.array(s.lazy(() => companyBulkRequestSchema)),
    signals: s.optional(s.array(s.lazy(() => signal1Schema))),
    signalsStartDate: s.optional(s.dateOnly()),
    signalsFilters: s.optional(s.lazy(() => signalsFiltersSchema)),
    partialCompany: s.defaulted(s.boolean(), true),
  },
  { additionalProperties: s.json() },
);
