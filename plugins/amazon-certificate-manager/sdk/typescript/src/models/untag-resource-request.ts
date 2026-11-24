import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UntagResourceRequest = {
  /** The ARN of the ACM resource from which the tag is to be removed. */
  resourceArn: string;
  /** The key of each tag to remove. */
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
