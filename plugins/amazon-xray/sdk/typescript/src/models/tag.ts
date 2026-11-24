import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Tag = {
  /**
   * A tag key, such as Stage or Name. A tag key cannot be empty. The key can be a maximum of 128
   * characters, and can contain only Unicode letters, numbers, or separators, or the following
   * special characters: + - = . _ : /
   */
  key: string;
  /**
   * An optional tag value, such as Production or test-only. The value can be a maximum of 255
   * characters, and contain only Unicode letters, numbers, or separators, or the following special
   * characters: + - = . _ : /
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
