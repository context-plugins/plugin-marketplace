import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 1 = POS 3 = PayemntGateWay 5 = EDC 7 = ECommerce */
export const PaymentChannelsType = {
  _1: 1,
  _3: 3,
  _5: 5,
  _7: 7,
} as const;
export type PaymentChannelsType =
  | (typeof PaymentChannelsType)[keyof typeof PaymentChannelsType]
  | (number & {});

export const paymentChannelsTypeSchema: EnumSchema<PaymentChannelsType> =
  s.enumOf<PaymentChannelsType>(PaymentChannelsType);
