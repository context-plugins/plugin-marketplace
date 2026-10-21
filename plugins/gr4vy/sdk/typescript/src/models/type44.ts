import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Always `network-token`. */
export const Type44 = {
  NetworkToken: "network-token",
} as const;
export type Type44 = (typeof Type44)[keyof typeof Type44] | (string & {});

export const type44Schema: EnumSchema<Type44> = s.enumOf<Type44>(Type44);
