import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Method to use for timestamp extraction. Use <code>auto</code> for automatic detection,
 * <code>format</code> to specify a strptime format, or <code>current</code> to use the current
 * system time.
 */
export const Type1 = {
  Format: "format",
} as const;
export type Type1 = (typeof Type1)[keyof typeof Type1] | (string & {});

export const type1Schema: EnumSchema<Type1> = s.enumOf<Type1>(Type1);
