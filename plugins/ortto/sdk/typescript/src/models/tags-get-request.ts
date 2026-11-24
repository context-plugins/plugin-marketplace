import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TagsGetRequest = {
  /** Optional search term to filter tags. */
  q?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tagsGetRequestSchema: Schema<TagsGetRequest> = s.object<TagsGetRequest>(
  {
    q: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
