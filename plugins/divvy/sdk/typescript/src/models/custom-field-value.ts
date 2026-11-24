import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Custom field value object representing the custom field value return on Custom fields for
 * transactions and reimbursements.
 */
export type CustomFieldValue = {
  uuid: string;
  value: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customFieldValueSchema: Schema<CustomFieldValue> = s.object<CustomFieldValue>(
  {
    uuid: s.string(),
    value: s.string(),
  },
  { additionalProperties: s.json() },
);
