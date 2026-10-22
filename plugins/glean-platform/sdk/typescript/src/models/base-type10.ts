import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A further page requires a usable continuation cursor. */
export type BaseType10 = {
  /** Further-page discriminator. */
  hasMore?: boolean;
  /** Opaque nonempty cursor for the next authorized page. */
  nextCursor: string;
};

export const baseType10Schema: Schema<BaseType10> = s.object<BaseType10>({
  hasMore: s.optional(s.boolean()),
  nextCursor: s.string(),
  _keysMap: {
    hasMore: "has_more",
    nextCursor: "next_cursor",
  },
});
