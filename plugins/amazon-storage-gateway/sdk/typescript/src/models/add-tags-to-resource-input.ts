import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tagSchema, type Tag } from "./tag.js";

export type AddTagsToResourceInput = {
  /** The Amazon Resource Name (ARN) of the resource you want to add tags to. */
  resourceArn: string;
  /**
   * The key-value pair that represents the tag you want to add to the resource. The value can be an
   * empty string. Valid characters for key and value are letters, spaces, and numbers representable
   * in UTF-8 format, and the following special characters: + - = . _ : / \@. The maximum length of
   * a tag's key is 128 characters, and the maximum length for a tag's value is 256.
   */
  tags: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const addTagsToResourceInputSchema: Schema<AddTagsToResourceInput> = s.object<AddTagsToResourceInput>(
  {
    resourceArn: s.string(),
    tags: s.array(s.lazy(() => tagSchema)),
    _keysMap: {
      resourceArn: "ResourceARN",
      tags: "Tags",
    },
  },
  { additionalProperties: s.json() },
);
