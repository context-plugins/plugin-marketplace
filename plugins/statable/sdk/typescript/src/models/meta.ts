import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Present only on breakdown responses. */
export type Meta = {
  /** Total distinct values for the window, across all pages. */
  total?: number;
  /** Effective limit after clamping. */
  limit?: number;
  offset?: number;
  /** True when offset + returned rows < total. Page again with offset += limit. */
  hasMore?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metaSchema: Schema<Meta> = s.object<Meta>(
  {
    total: s.optional(s.int()),
    limit: s.optional(s.int()),
    offset: s.optional(s.int()),
    hasMore: s.optional(s.boolean()),
    _keysMap: {
      hasMore: "has_more",
    },
  },
  { additionalProperties: s.json() },
);
