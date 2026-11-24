import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Pagination = {
  /** Limits the number of returned results. */
  limit?: number;
  /** Offset from which start returned results. */
  offset?: number;
  /** Returned total item count. */
  totalCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginationSchema: Schema<Pagination> = s.object<Pagination>(
  {
    limit: s.optional(s.int()),
    offset: s.optional(s.int()),
    totalCount: s.optional(s.int()),
    _keysMap: {
      totalCount: "total_count",
    },
  },
  { additionalProperties: s.json() },
);
