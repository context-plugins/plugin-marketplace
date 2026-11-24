import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 1 to have Razorpay notify customer via SMS/email on each charge event. */
export const CustomerNotify1 = {
  _0: 0,
  _1: 1,
} as const;
export type CustomerNotify1 = (typeof CustomerNotify1)[keyof typeof CustomerNotify1] | (number & {});

export const customerNotify1Schema: EnumSchema<CustomerNotify1> = s.enumOf<CustomerNotify1>(CustomerNotify1);
