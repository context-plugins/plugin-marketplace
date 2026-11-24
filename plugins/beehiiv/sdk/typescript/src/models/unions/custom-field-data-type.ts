import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The value of the custom field, The value stored for the subscription, The value stored for the
 * subscription, The value of the custom field, The value stored for the subscription
 */
export type CustomFieldDataType = string | number | boolean | string[];

export const customFieldDataTypeSchema: Schema<CustomFieldDataType> = s.of<CustomFieldDataType>(
  s.union([s.string(), s.float64(), s.boolean(), s.array(s.string())]),
);
