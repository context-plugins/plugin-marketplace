import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Tag = {
  /** The key of a tag. */
  key?: string;
  /** The value of a tag. */
  value?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tagSchema: Schema<Tag> = s.object<Tag>(
  {
    key: s.optional(s.string()),
    value: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
