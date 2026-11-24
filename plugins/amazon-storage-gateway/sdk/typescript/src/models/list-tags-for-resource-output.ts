import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tagSchema, type Tag } from "./tag.js";

export type ListTagsForResourceOutput = {
  /** The Amazon Resource Name (ARN) of the resource for which you want to list tags. */
  resourceArn?: string;
  /** An opaque string that indicates the position at which to stop returning the list of tags. */
  marker?: string;
  /** An array that contains the tags for the specified resource. */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listTagsForResourceOutputSchema: Schema<ListTagsForResourceOutput> =
  s.object<ListTagsForResourceOutput>(
    {
      resourceArn: s.optional(s.string()),
      marker: s.optional(s.string()),
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      _keysMap: {
        resourceArn: "ResourceARN",
        marker: "Marker",
        tags: "Tags",
      },
    },
    { additionalProperties: s.json() },
  );
