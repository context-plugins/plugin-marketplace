import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** This object specifies how to query the next set of results. */
export type QrPagination = {
  /** a hyperlink to the next set of results. */
  next?: string;
  /** the identifier of where to begin searching for the next set of results. */
  searchAfter?: string;
  /** the number of results returned from this query. */
  size?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const qrPaginationSchema: Schema<QrPagination> = s.object<QrPagination>(
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
