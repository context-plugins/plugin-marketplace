import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { pagingCursorsSchema, type PagingCursors } from "./paging-cursors.js";

export type Paging = {
  cursors?: PagingCursors;
  /** URL for the next page of results */
  next?: string;
  /** URL for the previous page of results */
  previous?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pagingSchema: Schema<Paging> = s.object<Paging>(
  {
    cursors: s.optional(s.lazy(() => pagingCursorsSchema)),
    next: s.optional(s.string()),
    previous: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
