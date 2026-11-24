import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MultipleValuesSetting = {
  /**
   * Indicates whether a slot can return multiple values. When true, the slot may return more than
   * one value in a response. When false, the slot returns only a single value. Multi-value slots
   * are only available in the en-US locale. If you set this value to true in any other locale,
   * Amazon Lex throws a ValidationException. If the allowMutlipleValues is not set, the default
   * value is false.
   */
  allowMultipleValues?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const multipleValuesSettingSchema: Schema<MultipleValuesSetting> = s.object<MultipleValuesSetting>(
  {
    allowMultipleValues: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
