import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customFieldValueSchema, type CustomFieldValue } from "./custom-field-value.js";

/**
 * Custom field object used for custom field return values. Used on Transaction and Reimbursement
 * returns
 */
export type CustomField = {
  uuid: string;
  name: string;
  note: string;
  selectedValues: CustomFieldValue[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customFieldSchema: Schema<CustomField> = s.object<CustomField>(
  {
    uuid: s.string(),
    name: s.string(),
    note: s.string(),
    selectedValues: s.array(s.lazy(() => customFieldValueSchema)),
  },
  { additionalProperties: s.json() },
);
