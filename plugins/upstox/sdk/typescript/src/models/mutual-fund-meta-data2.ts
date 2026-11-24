import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { paginationSchema, type Pagination } from "./pagination.js";

/** Meta data for mutual fund sips */
export type MutualFundMetaData2 = {
  page?: Pagination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mutualFundMetaData2Schema: Schema<MutualFundMetaData2> = s.object<MutualFundMetaData2>(
  {
    page: s.optional(s.lazy(() => paginationSchema)),
  },
  { additionalProperties: s.json() },
);
