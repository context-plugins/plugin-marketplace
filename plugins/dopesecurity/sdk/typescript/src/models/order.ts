import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Order = {
  Desc: "desc",
  Asc: "asc",
} as const;
export type Order = (typeof Order)[keyof typeof Order] | (string & {});

export const orderSchema: EnumSchema<Order> = s.enumOf<Order>(Order);
