import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { nextCursorSchema, type NextCursor } from "./unions/next-cursor.js";

export type CursorMeta = {
  nextCursor: NextCursor;
  hasMore: boolean;
  limit: number;
};

export const cursorMetaSchema: Schema<CursorMeta> = s.object<CursorMeta>({
  nextCursor: nextCursorSchema,
  hasMore: s.boolean(),
  limit: s.int(),
  _keysMap: {
    nextCursor: "next_cursor",
    hasMore: "has_more",
  },
});
