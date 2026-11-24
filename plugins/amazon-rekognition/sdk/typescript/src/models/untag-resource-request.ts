import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UntagResourceRequest = {
  /**
   * Amazon Resource Name (ARN) of the model, collection, or stream processor that you want to
   * remove the tags from.
   */
  resourceArn: string;
  /** A list of the tags that you want to remove. */
  tagKeys: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const untagResourceRequestSchema: Schema<UntagResourceRequest> = s.object<UntagResourceRequest>(
  {
    resourceArn: s.string(),
    tagKeys: s.array(s.string()),
    _keysMap: {
      resourceArn: "ResourceArn",
      tagKeys: "TagKeys",
    },
  },
  { additionalProperties: s.json() },
);
