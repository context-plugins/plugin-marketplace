import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SearchRequest = {
  /** Keyword search query. */
  query: string;
  /** Max videos to return per page. Defaults to 5. @default 5 */
  limit?: number;
  /**
   * Opaque pagination cursor from a previous response's next_cursor (max 256 characters). Omit for
   * the first page. Cursors encode a list offset capped at 2000, so pagination cannot reach past
   * the first 2000 items.
   */
  cursor?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const searchRequestProperties: s.Shape<SearchRequest> = {
  query: s.string(),
  limit: s.defaulted(s.int(), 5),
  cursor: s.optional(s.string()),
};

export const searchRequestInternalSchema: Schema<SearchRequest> = s.object<SearchRequest>(
  searchRequestProperties,
  { additionalProperties: s.json() },
);

export const searchRequestSchema: Schema<SearchRequest> = s.lazySchema(() =>
  s.object<SearchRequest>(
    {
      ...searchRequestProperties,
      query: s.string().check(s.minLength(1), s.maxLength(2000)),
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(50)), 5),
      cursor: s.optional(s.string().check(s.maxLength(256))),
    },
    { additionalProperties: s.json() },
  ),
);
