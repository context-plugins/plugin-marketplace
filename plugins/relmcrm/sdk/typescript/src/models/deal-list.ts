import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dealSchema, type Deal } from "./deal.js";
import { object1Schema, type Object1 } from "./object1.js";

export type DealList = {
  object?: Object1;
  hasMore?: boolean;
  nextCursor?: string | null;
  data?: Deal[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dealListSchema: Schema<DealList> = s.object<DealList>(
  {
    object: s.optional(s.lazy(() => object1Schema)),
    hasMore: s.optional(s.boolean()),
    nextCursor: s.optionalNullable(s.string()),
    data: s.optional(s.array(s.lazy(() => dealSchema))),
    _keysMap: {
      hasMore: "has_more",
      nextCursor: "next_cursor",
    },
  },
  { additionalProperties: s.json() },
);
