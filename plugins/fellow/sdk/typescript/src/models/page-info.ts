import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Information about a page returned in a paginated response. */
export type PageInfo = {
  cursor?: string | null;
  pageSize: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pageInfoSchema: Schema<PageInfo> = s.object<PageInfo>(
  {
    cursor: s.optionalNullable(s.string()),
    pageSize: s.int(),
    _keysMap: {
      pageSize: "page_size",
    },
  },
  { additionalProperties: s.json() },
);
