import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Pagination = {
  /** Current page number */
  page: number;
  /** Items per page */
  limit: number;
  /** Total number of items */
  total: number;
  /** Total number of pages */
  totalPages: number;
};

export const paginationSchema: Schema<Pagination> = s.object<Pagination>({
  page: s.int(),
  limit: s.int(),
  total: s.int(),
  totalPages: s.int(),
});
