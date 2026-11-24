import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Request body for adding (POST) or removing (DELETE) tags on a support request. The operation is
 * surgical — only the tags listed are affected; any other tags on the ticket are preserved.
 */
export type TagsRequest = {
  /**
   * List of tags to add or remove. Customer-submitted tags are auto-prefixed with `customer_tag/`.
   */
  tags: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const tagsRequestProperties: s.Shape<TagsRequest> = {
  tags: s.array(s.string()),
};

export const tagsRequestInternalSchema: Schema<TagsRequest> = s.object<TagsRequest>(tagsRequestProperties, {
  additionalProperties: s.json(),
});

export const tagsRequestSchema: Schema<TagsRequest> = s.lazySchema(() =>
  s.object<TagsRequest>(
    {
      ...tagsRequestProperties,
      tags: s.array(s.string().check(s.minLength(1), s.maxLength(80))).check(s.minLength(1), s.maxLength(50)),
    },
    { additionalProperties: s.json() },
  ),
);
