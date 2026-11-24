import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Pagination metadata */
export type PaginationDidlogicComHlrLookupsApi = {
  /** Total number of items */
  total: number;
  /** Total number of pages */
  totalPages: number;
  /** Current page number */
  currentPage: number;
  /** Items per page */
  perPage: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginationDidlogicComHlrLookupsApiSchema: Schema<PaginationDidlogicComHlrLookupsApi> =
  s.object<PaginationDidlogicComHlrLookupsApi>(
    {
      total: s.int(),
      totalPages: s.int(),
      currentPage: s.int(),
      perPage: s.int(),
      _keysMap: {
        totalPages: "total_pages",
        currentPage: "current_page",
        perPage: "per_page",
      },
    },
    { additionalProperties: s.json() },
  );
