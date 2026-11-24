import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomFieldValueParams = {
  /** The unique public ID for the CustomField. */
  fieldId: string;
  /** The unique public ID for the CustomFieldEnumValue. */
  valueId: string;
  /** A literal value for the CustomField. Currently ignored. */
  value?: string;
};

export const customFieldValueParamsSchema: Schema<CustomFieldValueParams> = s.object<CustomFieldValueParams>({
  fieldId: s.string(),
  valueId: s.string(),
  value: s.optional(s.string()),
  _keysMap: {
    fieldId: "field_id",
    valueId: "value_id",
  },
});
