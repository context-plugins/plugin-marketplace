import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Cursor pagination metadata. */
export type CursorMeta = {
  perPage: number;
  nextCursor: string | null;
  prevCursor: string | null;
  /** True when next_cursor is available. */
  hasMore?: boolean;
  /** Exact filtered row count when include_total=true; otherwise null. */
  total?: number | null;
  /** True when total was requested and computed exactly. */
  totalIsExact?: boolean | null;
  /** Normalized/requested filters applied to this list query. */
  appliedFilters?: Record<string, unknown>;
  /**
   * Unrecognized query keys. Non-empty means the client sent parameters outside the supported
   * contract.
   */
  unknownFilters?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const cursorMetaProperties: s.Shape<CursorMeta> = {
  perPage: s.int(),
  nextCursor: s.nullable(s.string()),
  prevCursor: s.nullable(s.string()),
  hasMore: s.optional(s.boolean()),
  total: s.optionalNullable(s.int()),
  totalIsExact: s.optionalNullable(s.boolean()),
  appliedFilters: s.optional(s.record(s.string(), s.unknown())),
  unknownFilters: s.optional(s.array(s.string())),
  _keysMap: {
    perPage: "per_page",
    nextCursor: "next_cursor",
    prevCursor: "prev_cursor",
    hasMore: "has_more",
    totalIsExact: "total_is_exact",
    appliedFilters: "applied_filters",
    unknownFilters: "unknown_filters",
  },
};

export const cursorMetaInternalSchema: Schema<CursorMeta> = s.object<CursorMeta>(cursorMetaProperties, {
  additionalProperties: s.json(),
});

export const cursorMetaSchema: Schema<CursorMeta> = s.lazySchema(() =>
  s.object<CursorMeta>(
    {
      ...cursorMetaProperties,
      perPage: s.int().check(s.gte(1), s.lte(100)),
      total: s.optionalNullable(s.int().check(s.gte(0))),
    },
    { additionalProperties: s.json() },
  ),
);
