import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TagsRequest = {
  tags: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tagsRequestSchema: Schema<TagsRequest> = s.object<TagsRequest>(
  {
    tags: s.record(s.string(), s.string()),
  },
  { additionalProperties: s.json() },
);
