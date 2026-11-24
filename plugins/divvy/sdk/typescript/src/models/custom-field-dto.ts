import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customFieldValueDtoSchema, type CustomFieldValueDto } from "./custom-field-value-dto.js";

/** Transaction custom field response. */
export type CustomFieldDto = {
  /**
   * BILL-generated ID of the custom field
   *
   * @deprecated
   */
  id?: string;
  /** BILL-generated UUID of the custom field */
  uuid?: string;
  /** Custom field name */
  name?: string;
  /** Custom field note */
  note?: string;
  /** Set as `true` if the custom field is required */
  isRequired?: boolean;
  /**
   * List of selected values for this custom field.
   *
   * **NOTE**: In the response, you get up to 20 selected values for a custom field. Use `GET
   * /v3/spend/custom-fields/{customFieldId}/values` to get the complete list of selected values.
   */
  selectedValues?: CustomFieldValueDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customFieldDtoSchema: Schema<CustomFieldDto> = s.object<CustomFieldDto>(
  {
    id: s.optional(s.string()),
    uuid: s.optional(s.string()),
    name: s.optional(s.string()),
    note: s.optional(s.string()),
    isRequired: s.optional(s.boolean()),
    selectedValues: s.optional(s.array(s.lazy(() => customFieldValueDtoSchema))),
  },
  { additionalProperties: s.json() },
);
