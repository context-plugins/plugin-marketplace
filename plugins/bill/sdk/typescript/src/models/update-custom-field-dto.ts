import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Set custom fields in transactions \& reimbursements. */
export type UpdateCustomFieldDto = {
  /** BILL-generated ID or UUID of the custom field */
  customFieldId: string;
  /**
   * List of selected custom field values. Set the custom field value ID or UUID values.
   *
   * **Note**: Clear the `selectedValues` array to clear all the custom field selected values.
   */
  selectedValues?: string[];
  /**
   * Updated custom field note.
   *
   * **Note**: This field is available only for custom fields with `type` set as `NOTE`.
   */
  note?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateCustomFieldDtoSchema: Schema<UpdateCustomFieldDto> = s.object<UpdateCustomFieldDto>(
  {
    customFieldId: s.string(),
    selectedValues: s.optional(s.array(s.string())),
    note: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
