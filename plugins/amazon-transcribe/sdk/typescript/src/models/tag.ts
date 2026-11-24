import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Tag = {
  /**
   * The first part of a key:value pair that forms a tag associated with a given resource. For
   * example, in the tag Department:Sales, the key is 'Department'.
   */
  key: string;
  /**
   * The second part of a key:value pair that forms a tag associated with a given resource. For
   * example, in the tag Department:Sales, the value is 'Sales'. Note that you can set the value of
   * a tag to an empty string, but you can't set the value of a tag to null. Omitting the tag value
   * is the same as using an empty string.
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
