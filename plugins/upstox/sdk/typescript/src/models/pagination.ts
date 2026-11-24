import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Pagination = {
  pageNumber?: number;
  totalPages?: number;
  records?: number;
  totalRecords?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginationSchema: Schema<Pagination> = s.object<Pagination>(
  {
    pageNumber: s.optional(s.int()),
    totalPages: s.optional(s.int()),
    records: s.optional(s.int()),
    totalRecords: s.optional(s.int()),
    _keysMap: {
      pageNumber: "page_number",
      totalPages: "total_pages",
      totalRecords: "total_records",
    },
  },
  { additionalProperties: s.json() },
);
