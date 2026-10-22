import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Method to use for timestamp extraction. Use <code>auto</code> for automatic detection,
 * <code>format</code> to specify a strptime format, or <code>current</code> to use the current
 * system time.
 */
export const Type = {
  Auto: "auto",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
