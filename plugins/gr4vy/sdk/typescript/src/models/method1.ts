import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Always `bank`. */
export const Method1 = {
  Bank: "bank",
} as const;
export type Method1 = (typeof Method1)[keyof typeof Method1] | (string & {});

export const method1Schema: EnumSchema<Method1> = s.enumOf<Method1>(Method1);
