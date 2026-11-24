import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListTagsForResourceResponse = {
  /** The tags associated with a resource. */
  tags?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listTagsForResourceResponseSchema: Schema<ListTagsForResourceResponse> =
  s.object<ListTagsForResourceResponse>(
    {
      tags: s.optional(s.record(s.string(), s.string())),
    },
    { additionalProperties: s.json() },
  );
