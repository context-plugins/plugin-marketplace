import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SearchMeta = {
  hasMore: boolean;
  limit: number;
  offset: number;
  query: string;
  /**
   * GH#423: present when sort.field=date was honored. "global" = the whole match set was
   * date-ordered server-side (text search); "retrieved_window" = the similarity-retrieved window
   * was date-ordered (semantic/hybrid, where a global date order isn't defined for kNN retrieval).
   */
  sortScope?: string | null;
  tookMs: number;
  total: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const searchMetaProperties: s.Shape<SearchMeta> = {
  hasMore: s.boolean(),
  limit: s.int(),
  offset: s.int(),
  query: s.string(),
  sortScope: s.optionalNullable(s.string()),
  tookMs: s.int(),
  total: s.int(),
  _keysMap: {
    hasMore: "has_more",
    sortScope: "sort_scope",
    tookMs: "took_ms",
  },
};

export const searchMetaInternalSchema: Schema<SearchMeta> = s.object<SearchMeta>(searchMetaProperties, {
  additionalProperties: s.json(),
});

export const searchMetaSchema: Schema<SearchMeta> = s.lazySchema(() =>
  s.object<SearchMeta>(
    {
      ...searchMetaProperties,
      limit: s.int().check(s.gte(0)),
      offset: s.int().check(s.gte(0)),
      tookMs: s.int().check(s.gte(0)),
      total: s.int().check(s.gte(0)),
    },
    { additionalProperties: s.json() },
  ),
);
