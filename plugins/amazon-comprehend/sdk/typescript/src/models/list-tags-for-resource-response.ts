import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tagSchema, type Tag } from "./tag.js";

export type ListTagsForResourceResponse = {
  /** The Amazon Resource Name (ARN) of the given Amazon Comprehend resource you are querying. */
  resourceArn?: string;
  /**
   * Tags associated with the Amazon Comprehend resource being queried. A tag is a key-value pair
   * that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with
   * "Sales" as the key might be added to a resource to indicate its use by the sales department.
   */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listTagsForResourceResponseSchema: Schema<ListTagsForResourceResponse> =
  s.object<ListTagsForResourceResponse>(
    {
      resourceArn: s.optional(s.string()),
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      _keysMap: {
        resourceArn: "ResourceArn",
        tags: "Tags",
      },
    },
    { additionalProperties: s.json() },
  );
