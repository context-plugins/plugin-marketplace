import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { object1Schema, type Object1 } from "./object1.js";

export type ListMeta = {
  object?: Object1;
  hasMore?: boolean;
  nextCursor?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listMetaSchema: Schema<ListMeta> = s.object<ListMeta>(
  {
    object: s.optional(s.lazy(() => object1Schema)),
    hasMore: s.optional(s.boolean()),
    nextCursor: s.optionalNullable(s.string()),
    _keysMap: {
      hasMore: "has_more",
      nextCursor: "next_cursor",
    },
  },
  { additionalProperties: s.json() },
);
