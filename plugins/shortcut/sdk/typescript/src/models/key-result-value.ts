import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The starting value of the Key Result. */
export type KeyResultValue = {
  /** The numeric value, as a decimal string. No more than two decimal places are allowed. */
  numericValue?: string;
  /** The boolean value. */
  booleanValue?: boolean;
};

export const keyResultValueSchema: Schema<KeyResultValue> = s.object<KeyResultValue>({
  numericValue: s.optional(s.string()),
  booleanValue: s.optional(s.boolean()),
  _keysMap: {
    numericValue: "numeric_value",
    booleanValue: "boolean_value",
  },
});
