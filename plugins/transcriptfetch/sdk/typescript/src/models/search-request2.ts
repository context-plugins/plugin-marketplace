import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { Platform1, platform1Schema } from "./platform1.js";

export type SearchRequest2 = {
  /** Keyword search query. */
  query: string;
  /**
   * Where to search: youtube (default), tiktok, instagram, spotify, apple, or rss. Every result's
   * url is accepted by the transcript and batch endpoints as-is. rss searches the open podcast
   * index via Apple's directory and returns episode audio (enclosure) URLs.
   *
   * @default Platform1.Youtube
   */
  platform?: Platform1;
  /** Max videos to return per page. Defaults to 5. @default 5 */
  limit?: number;
  /**
   * Opaque pagination cursor from a previous response's next_cursor (max 256 characters). Omit for
   * the first page. Cursors are scoped to the listing (and, for search, the platform) that issued
   * them. Offset-based sources cannot page past the first 2000 items.
   */
  cursor?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const searchRequest2Properties: s.Shape<SearchRequest2> = {
  query: s.string(),
  platform: s.defaulted(platform1Schema, Platform1.Youtube),
  limit: s.defaulted(s.int(), 5),
  cursor: s.optional(s.string()),
};

export const searchRequest2InternalSchema: Schema<SearchRequest2> = s.object<SearchRequest2>(
  searchRequest2Properties,
  { additionalProperties: s.json() },
);

export const searchRequest2Schema: Schema<SearchRequest2> = s.lazySchema(() =>
  s.object<SearchRequest2>(
    {
      ...searchRequest2Properties,
      query: s.string().check(s.minLength(1), s.maxLength(2000)),
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(50)), 5),
      cursor: s.optional(s.string().check(s.maxLength(256))),
    },
    { additionalProperties: s.json() },
  ),
);
