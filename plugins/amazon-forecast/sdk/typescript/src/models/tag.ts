import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Tag = {
  /**
   * One part of a key-value pair that makes up a tag. A key is a general label that acts like a
   * category for more specific tag values.
   */
  key: string;
  /**
   * The optional part of a key-value pair that makes up a tag. A value acts as a descriptor within
   * a tag category (key).
   */
  value: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tagSchema: Schema<Tag> = s.object<Tag>(
  {
    key: s.string(),
    value: s.string(),
    _keysMap: {
      key: "Key",
      value: "Value",
    },
  },
  { additionalProperties: s.json() },
);
