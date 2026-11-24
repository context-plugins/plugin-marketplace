import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Tag = {
  /** The key of the tag. */
  key: string;
  /** The value of the tag. */
  value?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tagSchema: Schema<Tag> = s.object<Tag>(
  {
    key: s.string(),
    value: s.optional(s.string()),
    _keysMap: {
      key: "Key",
      value: "Value",
    },
  },
  { additionalProperties: s.json() },
);
