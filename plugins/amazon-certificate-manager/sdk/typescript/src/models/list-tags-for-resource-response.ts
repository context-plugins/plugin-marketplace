import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tagSchema, type Tag } from "./tag.js";

export type ListTagsForResourceResponse = {
  /** The tags associated with the resource. */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listTagsForResourceResponseSchema: Schema<ListTagsForResourceResponse> =
  s.object<ListTagsForResourceResponse>(
    {
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      _keysMap: {
        tags: "Tags",
      },
    },
    { additionalProperties: s.json() },
  );
