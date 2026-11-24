import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Tag = {
  /**
   * The initial part of a key-value pair that forms a tag associated with a given resource. For
   * instance, if you want to show which resources are used by which departments, you might use
   * “Department” as the key portion of the pair, with multiple possible values such as “sales,”
   * “legal,” and “administration.”
   */
  key: string;
  /**
   * The second part of a key-value pair that forms a tag associated with a given resource. For
   * instance, if you want to show which resources are used by which departments, you might use
   * “Department” as the initial (key) portion of the pair, with a value of “sales” to indicate the
   * sales department.
   */
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
