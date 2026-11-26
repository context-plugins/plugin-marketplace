import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Custom field value DTO object representing the custom field value return on Custom fields for
 * transactions and reimbursements.
 */
export type CustomFieldValueDto = {
  /**
   * BILL-generated ID of the custom field value
   *
   * @deprecated
   */
  id?: string;
  /** BILL-generated UUID of the custom field value */
  uuid?: string;
  /** Custom field value */
  value?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customFieldValueDtoSchema: Schema<CustomFieldValueDto> = s.object<CustomFieldValueDto>(
  {
    id: s.optional(s.string()),
    uuid: s.optional(s.string()),
    value: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
