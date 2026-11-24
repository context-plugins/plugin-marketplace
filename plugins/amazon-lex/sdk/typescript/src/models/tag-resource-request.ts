import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TagResourceRequest = {
  /** The Amazon Resource Name (ARN) of the bot, bot alias, or bot channel to tag. */
  resourceArn: string;
  /**
   * A list of tag keys to add to the resource. If a tag key already exists, the existing value is
   * replaced with the new value.
   */
  tags: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tagResourceRequestSchema: Schema<TagResourceRequest> = s.object<TagResourceRequest>(
  {
    resourceArn: s.string(),
    tags: s.record(s.string(), s.string()),
    _keysMap: {
      resourceArn: "resourceARN",
    },
  },
  { additionalProperties: s.json() },
);
