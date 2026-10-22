import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomFieldValueStr = {
  /** Text field for string value. */
  strText?: string;
};

export const customFieldValueStrSchema: Schema<CustomFieldValueStr> = s.object<CustomFieldValueStr>({
  strText: s.optional(s.string()),
});
