import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RemoveTagsFromResourceInput = {
  /** The Amazon Resource Name (ARN) of the resource you want to remove the tags from. */
  resourceArn: string;
  /**
   * The keys of the tags you want to remove from the specified resource. A tag is composed of a
   * key-value pair.
   */
  tagKeys: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const removeTagsFromResourceInputSchema: Schema<RemoveTagsFromResourceInput> =
  s.object<RemoveTagsFromResourceInput>(
    {
      resourceArn: s.string(),
      tagKeys: s.array(s.string()),
      _keysMap: {
        resourceArn: "ResourceARN",
        tagKeys: "TagKeys",
      },
    },
    { additionalProperties: s.json() },
  );
