import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BitlinksPagination = {
  next?: string;
  searchAfter?: string;
  size?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bitlinksPaginationSchema: Schema<BitlinksPagination> = s.object<BitlinksPagination>(
  {
    next: s.optional(s.string()),
    searchAfter: s.optional(s.string()),
    size: s.optional(s.int()),
    _keysMap: {
      searchAfter: "search_after",
    },
  },
  { additionalProperties: s.json() },
);
