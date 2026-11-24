import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customFieldTypeSchema, type CustomFieldType } from "./custom-field-type.js";
import { customFieldDataTypeSchema, type CustomFieldDataType } from "./unions/custom-field-data-type.js";

export type CustomField = {
  /** The name of the existing custom field */
  name?: string;
  /** The type of value being stored in the custom field. */
  kind?: CustomFieldType;
  /** The value stored for the subscription */
  value?: CustomFieldDataType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customFieldSchema: Schema<CustomField> = s.object<CustomField>(
  {
    name: s.optional(s.string()),
    kind: s.optional(s.lazy(() => customFieldTypeSchema)),
    value: s.optional(s.lazy(() => customFieldDataTypeSchema)),
  },
  { additionalProperties: s.json() },
);
