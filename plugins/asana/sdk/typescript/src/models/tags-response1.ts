import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tagResponseSchema, type TagResponse } from "./tag-response.js";

export type TagsResponse1 = {
  data?: TagResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tagsResponse1Schema: Schema<TagsResponse1> = s.object<TagsResponse1>(
  {
    data: s.optional(s.lazy(() => tagResponseSchema)),
  },
  { additionalProperties: s.json() },
);
