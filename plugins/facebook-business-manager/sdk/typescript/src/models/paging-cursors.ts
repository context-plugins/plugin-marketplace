import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PagingCursors = {
  /** Cursor pointing to the start of the current page */
  before?: string;
  /** Cursor pointing to the end of the current page */
  after?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pagingCursorsSchema: Schema<PagingCursors> = s.object<PagingCursors>(
  {
    before: s.optional(s.string()),
    after: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
