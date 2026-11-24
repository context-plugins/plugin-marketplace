import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tagSchema, type Tag } from "./tag.js";

export type TagResourceRequest = {
  /** The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. */
  resourceArn: string;
  /**
   * The tags to add to the resource. A tag is an array of key-value pairs. The following basic
   * restrictions apply to tags: Maximum number of tags per resource - 50. For each resource, each
   * tag key must be unique, and each tag key can have only one value. Maximum key length - 128
   * Unicode characters in UTF-8. Maximum value length - 256 Unicode characters in UTF-8. If your
   * tagging schema is used across multiple services and resources, remember that other services may
   * have restrictions on allowed characters. Generally allowed characters are: letters, numbers,
   * and spaces representable in UTF-8, and the
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
