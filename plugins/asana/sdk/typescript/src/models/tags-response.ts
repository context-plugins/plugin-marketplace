import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tagCompactSchema, type TagCompact } from "./tag-compact.js";

export type TagsResponse = {
  data?: TagCompact[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tagsResponseSchema: Schema<TagsResponse> = s.object<TagsResponse>(
  {
    data: s.optional(s.array(s.lazy(() => tagCompactSchema))),
  },
  { additionalProperties: s.json() },
);
