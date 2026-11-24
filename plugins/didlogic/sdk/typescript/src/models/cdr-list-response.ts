import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { paginationInternalSchema, paginationSchema, type Pagination } from "./pagination.js";
import { callInternalSchema, callSchema, type Call } from "./unions/call.js";

/** Paginated list of CDR records */
export type CdrListResponse = {
  /** Array of call detail records */
  calls: Call[];
  /** Pagination metadata for list responses */
  pagination: Pagination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const cdrListResponseProperties: s.Shape<CdrListResponse> = {
  calls: s.array(s.lazy(() => callInternalSchema)),
  pagination: paginationInternalSchema,
};

export const cdrListResponseInternalSchema: Schema<CdrListResponse> = s.object<CdrListResponse>(
  cdrListResponseProperties,
  { additionalProperties: s.json() },
);

export const cdrListResponseSchema: Schema<CdrListResponse> = s.lazySchema(() =>
  s.object<CdrListResponse>(
    {
      ...cdrListResponseProperties,
      calls: s.array(s.lazy(() => callSchema)),
      pagination: paginationSchema,
    },
    { additionalProperties: s.json() },
  ),
);
