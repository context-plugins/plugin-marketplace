import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customFieldDataType1Schema, type CustomFieldDataType1 } from "./unions/custom-field-data-type1.js";

/** The object required for setting custom field values on a subscription */
export type CustomFieldValue = {
  /** The name of the existing custom field */
  name?: string;
  /** The value stored for the subscription */
  value?: CustomFieldDataType1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customFieldValueSchema: Schema<CustomFieldValue> = s.object<CustomFieldValue>(
  {
    name: s.optional(s.string()),
    value: s.optional(s.lazy(() => customFieldDataType1Schema)),
  },
  { additionalProperties: s.json() },
);
