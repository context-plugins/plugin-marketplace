import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Pagination3 = {
  page: number;
  limit: number;
  totalCount: number;
  totalPages: number;
};

export const pagination3Schema: Schema<Pagination3> = s.object<Pagination3>({
  page: s.int(),
  limit: s.int(),
  totalCount: s.int(),
  totalPages: s.int(),
});
