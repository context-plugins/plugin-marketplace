import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tagSchema, type Tag } from "./tag.js";

export type ListTagsForResourceResponse = {
  /**
   * A list of tags, as key and value pairs, that is associated with the specified X-Ray group or
   * sampling rule.
   */
  tags?: Tag[];
  /**
   * A pagination token. If multiple pages of results are returned, use the NextToken value returned
   * with the current page of results to get the next page of results.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listTagsForResourceResponseSchema: Schema<ListTagsForResourceResponse> =
  s.object<ListTagsForResourceResponse>(
    {
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      nextToken: s.optional(s.string()),
      _keysMap: {
        tags: "Tags",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
