import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tagSchema, type Tag } from "./tag.js";

export type ListTagsForResourceResponse = {
  /** The Amazon Resource Name (ARN) specified in your request. */
  resourceArn?: string;
  /** Lists all tags associated with the given transcription job, vocabulary, model, or resource. */
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
