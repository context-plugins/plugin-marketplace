import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 1 = Razorpay sends SMS/email notifications to customer on each charge. */
export const CustomerNotify = {
  _0: 0,
  _1: 1,
} as const;
export type CustomerNotify = (typeof CustomerNotify)[keyof typeof CustomerNotify] | (number & {});

export const customerNotifySchema: EnumSchema<CustomerNotify> = s.enumOf<CustomerNotify>(CustomerNotify);
