import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AddTagsToResourceOutput = {
  /** The Amazon Resource Name (ARN) of the resource you want to add tags to. */
  resourceArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const addTagsToResourceOutputSchema: Schema<AddTagsToResourceOutput> =
  s.object<AddTagsToResourceOutput>(
    {
      resourceArn: s.optional(s.string()),
      _keysMap: {
        resourceArn: "ResourceARN",
      },
    },
    { additionalProperties: s.json() },
  );
