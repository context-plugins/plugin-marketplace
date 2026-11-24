import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CustomerNotify2 = {
  _0: 0,
  _1: 1,
} as const;
export type CustomerNotify2 = (typeof CustomerNotify2)[keyof typeof CustomerNotify2] | (number & {});

export const customerNotify2Schema: EnumSchema<CustomerNotify2> = s.enumOf<CustomerNotify2>(CustomerNotify2);
