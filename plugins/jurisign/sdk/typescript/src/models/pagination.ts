import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Pagination = {
  currentPage?: number;
  lastPage?: number;
  perPage?: number;
  total?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginationSchema: Schema<Pagination> = s.object<Pagination>(
  {
    currentPage: s.optional(s.int()),
    lastPage: s.optional(s.int()),
    perPage: s.optional(s.int()),
    total: s.optional(s.int()),
    _keysMap: {
      currentPage: "current_page",
      lastPage: "last_page",
      perPage: "per_page",
    },
  },
  { additionalProperties: s.json() },
);
