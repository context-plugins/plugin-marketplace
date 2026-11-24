import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Side1 = {
  Buy: "buy",
  Sell: "sell",
  All: "all",
} as const;
export type Side1 = (typeof Side1)[keyof typeof Side1] | (string & {});

export const side1Schema: EnumSchema<Side1> = s.enumOf<Side1>(Side1);
