import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { paginationSchema, type Pagination } from "./pagination.js";

export type SearchMetaData = {
  page?: Pagination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchMetaDataSchema: Schema<SearchMetaData> = s.object<SearchMetaData>(
  {
    page: s.optional(s.lazy(() => paginationSchema)),
  },
  { additionalProperties: s.json() },
);
