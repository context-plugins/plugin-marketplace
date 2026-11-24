import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 1 = Omise 3 = InAppIOS 5 = InAppAndriod 7 = UssdAis 9 = BankTranfer 11 = PrePaidSerial */
export const PaymentChannel = {
  _1: 1,
  _3: 3,
  _5: 5,
  _7: 7,
  _9: 9,
  _11: 11,
} as const;
export type PaymentChannel = (typeof PaymentChannel)[keyof typeof PaymentChannel] | (number & {});

export const paymentChannelSchema: EnumSchema<PaymentChannel> = s.enumOf<PaymentChannel>(PaymentChannel);
