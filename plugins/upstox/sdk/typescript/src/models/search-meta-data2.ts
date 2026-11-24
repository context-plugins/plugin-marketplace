import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { paginationSchema, type Pagination } from "./pagination.js";

/** Meta data for search instrument response */
export type SearchMetaData2 = {
  page?: Pagination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchMetaData2Schema: Schema<SearchMetaData2> = s.object<SearchMetaData2>(
  {
    page: s.optional(s.lazy(() => paginationSchema)),
  },
  { additionalProperties: s.json() },
);
