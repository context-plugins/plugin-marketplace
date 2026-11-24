import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TagResourceRequest = {
  /**
   * Amazon Resource Name (ARN) of the model, collection, or stream processor that you want to
   * assign the tags to.
   */
  resourceArn: string;
  /** The key-value tags to assign to the resource. */
  tags: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tagResourceRequestSchema: Schema<TagResourceRequest> = s.object<TagResourceRequest>(
  {
    resourceArn: s.string(),
    tags: s.record(s.string(), s.string()),
    _keysMap: {
      resourceArn: "ResourceArn",
      tags: "Tags",
    },
  },
  { additionalProperties: s.json() },
);
