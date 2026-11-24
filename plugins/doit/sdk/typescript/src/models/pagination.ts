import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Cursor-based pagination metadata. */
export type Pagination = {
  /** Token to retrieve the next page. Absent when there are no more pages. */
  pageToken?: string;
  /** Number of items in this page. */
  rowCount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginationSchema: Schema<Pagination> = s.object<Pagination>(
  {
    pageToken: s.optional(s.string()),
    rowCount: s.int(),
  },
  { additionalProperties: s.json() },
);
