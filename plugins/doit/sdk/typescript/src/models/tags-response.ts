import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Response body echoing the tags the operation actually acted on, after server-side transformation
 * (trim + lowercase + customer namespace prefix where applicable).
 */
export type TagsResponse = {
  /** The tags that were stored on (POST) or removed from (DELETE) the ticket. */
  appliedTags?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tagsResponseSchema: Schema<TagsResponse> = s.object<TagsResponse>(
  {
    appliedTags: s.optional(s.array(s.string())),
    _keysMap: {
      appliedTags: "applied_tags",
    },
  },
  { additionalProperties: s.json() },
);
