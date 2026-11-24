import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * 0 = None 1 = Cash 3 = Cheque 5 = Transfer 7 = CreditCard 9 = PushPay 11 = PettyCash 13 = Other 51
 * = TransferByKConnect
 */
export const PaymentMethod = {
  _0: 0,
  _1: 1,
  _3: 3,
  _5: 5,
  _7: 7,
  _9: 9,
  _11: 11,
  _13: 13,
  _51: 51,
} as const;
export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod] | (number & {});

export const paymentMethodSchema: EnumSchema<PaymentMethod> = s.enumOf<PaymentMethod>(PaymentMethod);
