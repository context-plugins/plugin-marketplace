import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Set to `card` to use a new card. */
export const Method13 = {
  Card: "card",
} as const;
export type Method13 = (typeof Method13)[keyof typeof Method13] | (string & {});

export const method13Schema: EnumSchema<Method13> = s.enumOf<Method13>(Method13);
