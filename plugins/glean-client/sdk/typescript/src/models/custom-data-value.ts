import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomDataValue = {
  displayLabel?: string;
  stringValue?: string;
  /** list of strings for multi-value properties */
  stringListValue?: string[];
  numberValue?: number;
  booleanValue?: boolean;
};

export const customDataValueSchema: Schema<CustomDataValue> = s.object<CustomDataValue>({
  displayLabel: s.optional(s.string()),
  stringValue: s.optional(s.string()),
  stringListValue: s.optional(s.array(s.string())),
  numberValue: s.optional(s.float64()),
  booleanValue: s.optional(s.boolean()),
});
