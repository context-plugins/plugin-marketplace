import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tagSchema, type Tag } from "./tag.js";

export type TagResourceRequest = {
  /**
   * The Amazon Resource Name (ARN) of the given Amazon Comprehend resource to which you want to
   * associate the tags.
   */
  resourceArn: string;
  /**
   * Tags being associated with a specific Amazon Comprehend resource. There can be a maximum of 50
   * tags (both existing and pending) associated with a specific resource.
   */
  tags: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tagResourceRequestSchema: Schema<TagResourceRequest> = s.object<TagResourceRequest>(
  {
    resourceArn: s.string(),
    tags: s.array(s.lazy(() => tagSchema)),
    _keysMap: {
      resourceArn: "ResourceArn",
      tags: "Tags",
    },
  },
  { additionalProperties: s.json() },
);
