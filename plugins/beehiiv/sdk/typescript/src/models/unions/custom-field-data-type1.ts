import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The value stored for the subscription */
export type CustomFieldDataType1 = string | number | boolean | string[];

export const customFieldDataType1Schema: Schema<CustomFieldDataType1> = s.of<CustomFieldDataType1>(
  s.union([s.string(), s.float64(), s.boolean(), s.array(s.string())]),
);
