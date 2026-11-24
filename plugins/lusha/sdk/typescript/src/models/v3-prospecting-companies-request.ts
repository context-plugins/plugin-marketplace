import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { filtersInternalSchema, filtersSchema, type Filters } from "./filters.js";
import { options1Schema, type Options1 } from "./options1.js";
import {
  v3PaginationRequestInternalSchema,
  v3PaginationRequestSchema,
  type V3PaginationRequest,
} from "./v3-pagination-request.js";

export type V3ProspectingCompaniesRequest = {
  pagination: V3PaginationRequest;
  /**
   * `filters.contacts` cannot be combined with company `searchText`, `signals`, `intent`, or
   * `technologies` on the same request — doing so returns `400` (contact filters are never silently
   * ignored).
   */
  filters: Filters;
  /** Optional. If provided, results are also persisted to this table. See the Tables API. */
  tableId?: string;
  options?: Options1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v3ProspectingCompaniesRequestProperties: s.Shape<V3ProspectingCompaniesRequest> = {
  pagination: v3PaginationRequestInternalSchema,
  filters: filtersInternalSchema,
  tableId: s.optional(s.string()),
  options: s.optional(s.lazy(() => options1Schema)),
};

export const v3ProspectingCompaniesRequestInternalSchema: Schema<V3ProspectingCompaniesRequest> =
  s.object<V3ProspectingCompaniesRequest>(v3ProspectingCompaniesRequestProperties, {
    additionalProperties: s.json(),
  });

export const v3ProspectingCompaniesRequestSchema: Schema<V3ProspectingCompaniesRequest> = s.lazySchema(() =>
  s.object<V3ProspectingCompaniesRequest>(
    {
      ...v3ProspectingCompaniesRequestProperties,
      pagination: v3PaginationRequestSchema,
      filters: filtersSchema,
    },
    { additionalProperties: s.json() },
  ),
);
