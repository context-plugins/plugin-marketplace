import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Meta1 = {
  count?: number;
  total?: number | null;
  limit?: number;
  offset?: number;
  hasMore?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const meta1Schema: Schema<Meta1> = s.object<Meta1>(
  {
    count: s.optional(s.int()),
    total: s.optionalNullable(s.int()),
    limit: s.optional(s.int()),
    offset: s.optional(s.int()),
    hasMore: s.optional(s.boolean()),
    _keysMap: {
      hasMore: "has_more",
    },
  },
  { additionalProperties: s.json() },
);
