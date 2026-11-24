import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomFieldEnumValue = {
  /** The unique public ID for the Custom Field. */
  id: string;
  /** A string value within the domain of this Custom Field. */
  value: string;
  /**
   * An integer indicating the position of this Value with respect to the other
   * CustomFieldEnumValues in the enumeration.
   */
  position: number;
  /** A color key associated with this CustomFieldEnumValue. */
  colorKey: string | null;
  /** A string description of this resource. @default "custom-field-enum-value" */
  entityType?: "custom-field-enum-value";
  /** When true, the CustomFieldEnumValue can be selected for the CustomField. */
  enabled: boolean;
};

const customFieldEnumValueProperties: s.Shape<CustomFieldEnumValue> = {
  id: s.string(),
  value: s.string(),
  position: s.int(),
  colorKey: s.nullable(s.string()),
  entityType: s.defaulted(s.literal("custom-field-enum-value"), "custom-field-enum-value"),
  enabled: s.boolean(),
  _keysMap: {
    colorKey: "color_key",
    entityType: "entity_type",
  },
};

export const customFieldEnumValueInternalSchema: Schema<CustomFieldEnumValue> =
  s.object<CustomFieldEnumValue>(customFieldEnumValueProperties);

export const customFieldEnumValueSchema: Schema<CustomFieldEnumValue> = s.lazySchema(() =>
  s.object<CustomFieldEnumValue>({
    ...customFieldEnumValueProperties,
    value: s.string().check(s.minLength(1), s.maxLength(63)),
  }),
);
