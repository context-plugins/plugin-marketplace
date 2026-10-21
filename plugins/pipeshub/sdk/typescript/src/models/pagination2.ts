import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Pagination2 = {
  page: number;
  limit: number;
  totalCount: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
};

export const pagination2Schema: Schema<Pagination2> = s.object<Pagination2>({
  page: s.int(),
  limit: s.int(),
  totalCount: s.int(),
  totalPages: s.int(),
  hasNext: s.boolean(),
  hasPrev: s.boolean(),
});
