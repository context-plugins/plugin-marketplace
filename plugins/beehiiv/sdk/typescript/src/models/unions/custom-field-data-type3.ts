import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type CustomFieldDataType3 = string | number | boolean | string[];

export const customFieldDataType3Schema: Schema<CustomFieldDataType3> = s.of<CustomFieldDataType3>(
  s.union([s.string(), s.float64(), s.boolean(), s.array(s.string())]),
);
