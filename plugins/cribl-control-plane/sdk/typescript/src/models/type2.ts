import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Method to use for timestamp extraction. Use <code>auto</code> for automatic detection,
 * <code>format</code> to specify a strptime format, or <code>current</code> to use the current
 * system time.
 */
export const Type2 = {
  Current: "current",
} as const;
export type Type2 = (typeof Type2)[keyof typeof Type2] | (string & {});

export const type2Schema: EnumSchema<Type2> = s.enumOf<Type2>(Type2);
