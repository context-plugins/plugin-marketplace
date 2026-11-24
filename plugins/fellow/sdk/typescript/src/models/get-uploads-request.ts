import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  paginatedRequestParamsInternalSchema,
  paginatedRequestParamsSchema,
  type PaginatedRequestParams,
} from "./paginated-request-params.js";
import { uploadFiltersSchema, type UploadFilters } from "./upload-filters.js";

/** Request body for listing API-uploaded recordings with optional filters and pagination. */
export type GetUploadsRequest = {
  pagination?: PaginatedRequestParams;
  filters?: UploadFilters;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const getUploadsRequestProperties: s.Shape<GetUploadsRequest> = {
  pagination: s.optional(s.lazy(() => paginatedRequestParamsInternalSchema)),
  filters: s.optional(s.lazy(() => uploadFiltersSchema)),
};

export const getUploadsRequestInternalSchema: Schema<GetUploadsRequest> = s.object<GetUploadsRequest>(
  getUploadsRequestProperties,
  { additionalProperties: s.json() },
);

export const getUploadsRequestSchema: Schema<GetUploadsRequest> = s.lazySchema(() =>
  s.object<GetUploadsRequest>(
    {
      ...getUploadsRequestProperties,
      pagination: s.optional(s.lazy(() => paginatedRequestParamsSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
