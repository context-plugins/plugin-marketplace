import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UntagResourceRequest = {
  /** The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. */
  resourceArn: string;
  /** The keys of the tags to be removed. */
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
