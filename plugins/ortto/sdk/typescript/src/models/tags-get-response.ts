import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TagsGetResponse = {
  tags?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tagsGetResponseSchema: Schema<TagsGetResponse> = s.object<TagsGetResponse>(
  {
    tags: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
