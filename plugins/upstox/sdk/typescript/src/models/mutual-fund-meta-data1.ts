import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { paginationSchema, type Pagination } from "./pagination.js";

/** Meta data for mutual fund orders */
export type MutualFundMetaData1 = {
  page?: Pagination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mutualFundMetaData1Schema: Schema<MutualFundMetaData1> = s.object<MutualFundMetaData1>(
  {
    page: s.optional(s.lazy(() => paginationSchema)),
  },
  { additionalProperties: s.json() },
);
