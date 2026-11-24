import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Pagination metadata for list responses */
export type Pagination = {
  /** Current page number (1-based) */
  page: number;
  /** Number of records per page */
  perPage: number;
  /** Total number of pages available */
  totalPages: number;
  /** Total number of records */
  totalRecords: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paginationProperties: s.Shape<Pagination> = {
  page: s.int(),
  perPage: s.int(),
  totalPages: s.int(),
  totalRecords: s.int(),
  _keysMap: {
    perPage: "per_page",
    totalPages: "total_pages",
    totalRecords: "total_records",
  },
};

export const paginationInternalSchema: Schema<Pagination> = s.object<Pagination>(paginationProperties, {
  additionalProperties: s.json(),
});

export const paginationSchema: Schema<Pagination> = s.lazySchema(() =>
  s.object<Pagination>(
    {
      ...paginationProperties,
      page: s.int().check(s.gte(1)),
      perPage: s.int().check(s.gte(1)),
      totalPages: s.int().check(s.gte(0)),
      totalRecords: s.int().check(s.gte(0)),
    },
    { additionalProperties: s.json() },
  ),
);
