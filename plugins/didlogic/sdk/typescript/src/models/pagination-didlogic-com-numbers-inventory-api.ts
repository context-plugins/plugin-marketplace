import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Pagination metadata */
export type PaginationDidlogicComNumbersInventoryApi = {
  /** Total number of items */
  total: number;
  /** Total number of pages */
  totalPages: number;
  /** Current page number */
  currentPage: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginationDidlogicComNumbersInventoryApiSchema: Schema<PaginationDidlogicComNumbersInventoryApi> =
  s.object<PaginationDidlogicComNumbersInventoryApi>(
    {
      total: s.int(),
      totalPages: s.int(),
      currentPage: s.int(),
      _keysMap: {
        totalPages: "total_pages",
        currentPage: "current_page",
      },
    },
    { additionalProperties: s.json() },
  );
