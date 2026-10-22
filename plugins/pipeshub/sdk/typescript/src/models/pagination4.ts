import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Pagination4 = {
  /** Current page (1-indexed). */
  page: number;
  /** Page size. */
  limit: number;
  totalItems: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
  /** Cursor for the next page; null on the last page. */
  nextCursor?: string | null;
  /** Cursor for the previous page; null on the first page. */
  prevCursor?: string | null;
  /** 1-based index of the first item on this page, when known. */
  startIndex?: number | null;
  /** 1-based index of the last item on this page, when known. */
  endIndex?: number | null;
  /** Number of items on this page. */
  currentPageItems?: number | null;
};

export const pagination4Schema: Schema<Pagination4> = s.object<Pagination4>({
  page: s.int(),
  limit: s.int(),
  totalItems: s.int(),
  totalPages: s.int(),
  hasNext: s.boolean(),
  hasPrev: s.boolean(),
  nextCursor: s.optionalNullable(s.string()),
  prevCursor: s.optionalNullable(s.string()),
  startIndex: s.optionalNullable(s.int()),
  endIndex: s.optionalNullable(s.int()),
  currentPageItems: s.optionalNullable(s.int()),
});
