import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { optionsSchema, type Options } from "./options.js";
import {
  v3PaginationRequestInternalSchema,
  v3PaginationRequestSchema,
  type V3PaginationRequest,
} from "./v3-pagination-request.js";
import {
  v3ProspectingContactFiltersInternalSchema,
  v3ProspectingContactFiltersSchema,
  type V3ProspectingContactFilters,
} from "./v3-prospecting-contact-filters.js";

export type V3ProspectingContactsRequest = {
  pagination: V3PaginationRequest;
  filters: V3ProspectingContactFilters;
  /** Optional. If provided, results are also persisted to this table. See the Tables API. */
  tableId?: string;
  options?: Options;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v3ProspectingContactsRequestProperties: s.Shape<V3ProspectingContactsRequest> = {
  pagination: v3PaginationRequestInternalSchema,
  filters: v3ProspectingContactFiltersInternalSchema,
  tableId: s.optional(s.string()),
  options: s.optional(s.lazy(() => optionsSchema)),
};

export const v3ProspectingContactsRequestInternalSchema: Schema<V3ProspectingContactsRequest> =
  s.object<V3ProspectingContactsRequest>(v3ProspectingContactsRequestProperties, {
    additionalProperties: s.json(),
  });

export const v3ProspectingContactsRequestSchema: Schema<V3ProspectingContactsRequest> = s.lazySchema(() =>
  s.object<V3ProspectingContactsRequest>(
    {
      ...v3ProspectingContactsRequestProperties,
      pagination: v3PaginationRequestSchema,
      filters: v3ProspectingContactFiltersSchema,
    },
    { additionalProperties: s.json() },
  ),
);
