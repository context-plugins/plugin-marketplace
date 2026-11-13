import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { idSchema, type Id } from "./unions/id.js";

/** A reference to a CustomField value asserted on a Story. */
export type HistoryReferenceCustomFieldEnumValue = {
  /** The ID of the entity referenced. */
  id: Id;
  /** The type of entity referenced. */
  entityType: string;
  /** The custom-field enum value as a string. */
  stringValue: string | null;
  /** Whether or not the custom-field enum value is enabled. */
  enumValueEnabled: boolean | null;
  /** The public-id of the parent custom-field of this enum value. */
  fieldId: string;
  /** The type variety of the parent custom-field of this enum value. */
  fieldType: string;
  /** The name as it is displayed to the user of the parent custom-field of this enum value. */
  fieldName: string;
  /** Whether or not the custom-field is enabled. */
  fieldEnabled: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const historyReferenceCustomFieldEnumValueSchema: Schema<HistoryReferenceCustomFieldEnumValue> =
  s.object<HistoryReferenceCustomFieldEnumValue>(
    {
      id: idSchema,
      entityType: s.string(),
      stringValue: s.nullable(s.string()),
      enumValueEnabled: s.nullable(s.boolean()),
      fieldId: s.string(),
      fieldType: s.string(),
      fieldName: s.string(),
      fieldEnabled: s.boolean(),
      _keysMap: {
        entityType: "entity_type",
        stringValue: "string_value",
        enumValueEnabled: "enum_value_enabled",
        fieldId: "field_id",
        fieldType: "field_type",
        fieldName: "field_name",
        fieldEnabled: "field_enabled",
      },
    },
    { additionalProperties: s.json() },
  );
