import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Always `card`. */
export const Method6 = {
  Card: "card",
} as const;
export type Method6 = (typeof Method6)[keyof typeof Method6] | (string & {});

export const method6Schema: EnumSchema<Method6> = s.enumOf<Method6>(Method6);
