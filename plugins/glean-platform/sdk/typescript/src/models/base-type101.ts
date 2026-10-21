import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The last page has no continuation cursor. */
export type BaseType101 = {
  /** Last-page discriminator. */
  hasMore?: boolean;
  /** If present on the last page, the cursor must be null. */
  nextCursor?: string | null;
};

export const baseType101Schema: Schema<BaseType101> = s.object<BaseType101>({
  hasMore: s.optional(s.boolean()),
  nextCursor: s.optionalNullable(s.string()),
  _keysMap: {
    hasMore: "has_more",
    nextCursor: "next_cursor",
  },
});
