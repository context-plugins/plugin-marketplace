import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { exchangeSummarySchema, type ExchangeSummary } from "./exchange-summary.js";
import { paginationSchema, type Pagination } from "./pagination.js";

export type ApiV1ExchangesResponse = {
  exchanges?: ExchangeSummary[];
  pagination?: Pagination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ExchangesResponseSchema: Schema<ApiV1ExchangesResponse> = s.object<ApiV1ExchangesResponse>(
  {
    exchanges: s.optional(s.array(s.lazy(() => exchangeSummarySchema))),
    pagination: s.optional(s.lazy(() => paginationSchema)),
  },
  { additionalProperties: s.json() },
);
