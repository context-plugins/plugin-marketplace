import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UntagResourceRequest = {
  /**
   * The Amazon Resource Name (ARN) of the given Amazon Comprehend resource from which you want to
   * remove the tags.
   */
  resourceArn: string;
  /**
   * The initial part of a key-value pair that forms a tag being removed from a given resource. For
   * example, a tag with "Sales" as the key might be added to a resource to indicate its use by the
   * sales department. Keys must be unique and cannot be duplicated for a particular resource.
   */
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
