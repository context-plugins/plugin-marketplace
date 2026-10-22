import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Pagination10 = {
  /** Current page number */
  page?: number;
  /** Items per page */
  limit?: number;
  /** Total matches across assistant and agent archives */
  totalCount?: number;
  /** Total pages at the current limit */
  totalPages?: number;
  /** Whether a next page exists */
  hasNextPage?: boolean;
  /** Whether a previous page exists */
  hasPrevPage?: boolean;
};

export const pagination10Schema: Schema<Pagination10> = s.object<Pagination10>({
  page: s.optional(s.int()),
  limit: s.optional(s.int()),
  totalCount: s.optional(s.int()),
  totalPages: s.optional(s.int()),
  hasNextPage: s.optional(s.boolean()),
  hasPrevPage: s.optional(s.boolean()),
});
