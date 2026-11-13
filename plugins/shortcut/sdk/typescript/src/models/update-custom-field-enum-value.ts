import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { colorKey2Schema, type ColorKey2 } from "./color-key2.js";

export type UpdateCustomFieldEnumValue = {
  /** The unique ID of an existing EnumValue within the CustomField's domain. */
  id?: string;
  /** A string value within the domain of this Custom Field. */
  value?: string;
  /** A color key associated with this EnumValue within the CustomField's domain. */
  colorKey?: ColorKey2 | null;
  /**
   * Whether this EnumValue is enabled for its CustomField or not. Leaving this key out of the
   * request leaves the current enabled state untouched.
   */
  enabled?: boolean;
};

const updateCustomFieldEnumValueProperties: s.Shape<UpdateCustomFieldEnumValue> = {
  id: s.optional(s.string()),
  value: s.optional(s.string()),
  colorKey: s.optionalNullable(s.lazy(() => colorKey2Schema)),
  enabled: s.optional(s.boolean()),
  _keysMap: {
    colorKey: "color_key",
  },
};

export const updateCustomFieldEnumValueInternalSchema: Schema<UpdateCustomFieldEnumValue> =
  s.object<UpdateCustomFieldEnumValue>(updateCustomFieldEnumValueProperties);

export const updateCustomFieldEnumValueSchema: Schema<UpdateCustomFieldEnumValue> = s.lazySchema(() =>
  s.object<UpdateCustomFieldEnumValue>({
    ...updateCustomFieldEnumValueProperties,
    value: s.optional(s.string().check(s.minLength(1), s.maxLength(63))),
  }),
);
