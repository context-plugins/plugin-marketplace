import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Pagination = {
  limit: number;
  offset: number;
  total: number;
  hasMore: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginationSchema: Schema<Pagination> = s.object<Pagination>(
  {
    limit: s.int(),
    offset: s.int(),
    total: s.int(),
    hasMore: s.boolean(),
  },
  { additionalProperties: s.json() },
);
