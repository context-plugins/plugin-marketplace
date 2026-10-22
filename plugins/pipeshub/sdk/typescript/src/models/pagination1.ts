import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Pagination1 = {
  page: number;
  /** Items per page (max 100) */
  limit: number;
  total: number;
  totalPages: number;
};

export const pagination1Schema: Schema<Pagination1> = s.object<Pagination1>({
  page: s.int(),
  limit: s.int(),
  total: s.int(),
  totalPages: s.int(),
});
