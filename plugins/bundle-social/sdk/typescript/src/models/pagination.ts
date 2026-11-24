import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Pagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginationSchema: Schema<Pagination> = s.object<Pagination>(
  {
    page: s.float64(),
    limit: s.float64(),
    total: s.float64(),
    totalPages: s.float64(),
  },
  { additionalProperties: s.json() },
);
