import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Pagination = {
  limit?: number;
  cursor?: string | null;
  /** Opaque base64 cursor for the next page; null on the last page. */
  nextCursor?: string | null;
  hasMore?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginationSchema: Schema<Pagination> = s.object<Pagination>(
  {
    limit: s.optional(s.int()),
    cursor: s.optionalNullable(s.string()),
    nextCursor: s.optionalNullable(s.string()),
    hasMore: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
