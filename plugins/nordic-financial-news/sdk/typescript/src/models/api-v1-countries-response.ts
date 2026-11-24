import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { countrySummarySchema, type CountrySummary } from "./country-summary.js";
import { paginationSchema, type Pagination } from "./pagination.js";

export type ApiV1CountriesResponse = {
  countries: CountrySummary[];
  pagination?: Pagination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1CountriesResponseSchema: Schema<ApiV1CountriesResponse> = s.object<ApiV1CountriesResponse>(
  {
    countries: s.array(s.lazy(() => countrySummarySchema)),
    pagination: s.optional(s.lazy(() => paginationSchema)),
  },
  { additionalProperties: s.json() },
);
