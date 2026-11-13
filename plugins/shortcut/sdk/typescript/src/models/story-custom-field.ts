import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StoryCustomField = {
  /** The unique public ID for a CustomField. */
  fieldId: string;
  /** The unique public ID for a CustomFieldEnumValue. */
  valueId: string;
  /** A string representation of the value, if applicable. */
  value: string;
};

export const storyCustomFieldSchema: Schema<StoryCustomField> = s.object<StoryCustomField>({
  fieldId: s.string(),
  valueId: s.string(),
  value: s.string(),
  _keysMap: {
    fieldId: "field_id",
    valueId: "value_id",
  },
});
