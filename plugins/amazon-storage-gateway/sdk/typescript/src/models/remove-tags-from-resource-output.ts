import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RemoveTagsFromResourceOutput = {
  /** The Amazon Resource Name (ARN) of the resource that the tags were removed from. */
  resourceArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const removeTagsFromResourceOutputSchema: Schema<RemoveTagsFromResourceOutput> =
  s.object<RemoveTagsFromResourceOutput>(
    {
      resourceArn: s.optional(s.string()),
      _keysMap: {
        resourceArn: "ResourceARN",
      },
    },
    { additionalProperties: s.json() },
  );
