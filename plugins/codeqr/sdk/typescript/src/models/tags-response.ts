import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TagsResponse = {
  /** The ID of the deleted tag. */
  id: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tagsResponseSchema: Schema<TagsResponse> = s.object<TagsResponse>(
  {
    id: s.string(),
  },
  { additionalProperties: s.json() },
);
