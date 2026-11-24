import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { filters1Schema, type Filters1 } from "./filters1.js";
import {
  paginationParamsInternalSchema,
  paginationParamsSchema,
  type PaginationParams,
} from "./pagination-params.js";

export type CompanySearchRequest = {
  pages?: PaginationParams;
  filters: Filters1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companySearchRequestProperties: s.Shape<CompanySearchRequest> = {
  pages: s.optional(s.lazy(() => paginationParamsInternalSchema)),
  filters: filters1Schema,
};

export const companySearchRequestInternalSchema: Schema<CompanySearchRequest> =
  s.object<CompanySearchRequest>(companySearchRequestProperties, { additionalProperties: s.json() });

export const companySearchRequestSchema: Schema<CompanySearchRequest> = s.lazySchema(() =>
  s.object<CompanySearchRequest>(
    {
      ...companySearchRequestProperties,
      pages: s.optional(s.lazy(() => paginationParamsSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
