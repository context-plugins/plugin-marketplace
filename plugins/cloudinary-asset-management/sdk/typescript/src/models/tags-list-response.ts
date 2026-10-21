import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TagsListResponse = {
  tags?: string[];
  nextCursor?: string | null;
};

export const tagsListResponseSchema: Schema<TagsListResponse> = s.object<TagsListResponse>({
  tags: s.optional(s.array(s.string())),
  nextCursor: s.optionalNullable(s.string()),
  _keysMap: {
    nextCursor: "next_cursor",
  },
});
