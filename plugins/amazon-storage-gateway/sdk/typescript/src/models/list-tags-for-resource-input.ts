import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListTagsForResourceInput = {
  /** The Amazon Resource Name (ARN) of the resource for which you want to list tags. */
  resourceArn: string;
  /** An opaque string that indicates the position at which to begin returning the list of tags. */
  marker?: string;
  /** Specifies that the list of tags returned be limited to the specified number of items. */
  limit?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listTagsForResourceInputSchema: Schema<ListTagsForResourceInput> =
  s.object<ListTagsForResourceInput>(
    {
      resourceArn: s.string(),
      marker: s.optional(s.string()),
      limit: s.optional(s.int()),
      _keysMap: {
        resourceArn: "ResourceARN",
        marker: "Marker",
        limit: "Limit",
      },
    },
    { additionalProperties: s.json() },
  );
