import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Pagination6 = {
  page?: number;
  limit?: number;
  totalCount?: number;
  totalPages?: number;
  hasNextPage?: boolean;
  hasPrevPage?: boolean;
};

export const pagination6Schema: Schema<Pagination6> = s.object<Pagination6>({
  page: s.optional(s.int()),
  limit: s.optional(s.int()),
  totalCount: s.optional(s.int()),
  totalPages: s.optional(s.int()),
  hasNextPage: s.optional(s.boolean()),
  hasPrevPage: s.optional(s.boolean()),
});
