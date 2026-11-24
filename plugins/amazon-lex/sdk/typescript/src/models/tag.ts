import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Tag = {
  /** The key for the tag. Keys are not case-sensitive and must be unique. */
  key: string;
  /** The value associated with a key. The value may be an empty string but it can't be null. */
  value: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tagSchema: Schema<Tag> = s.object<Tag>(
  {
    key: s.string(),
    value: s.string(),
  },
  { additionalProperties: s.json() },
);
