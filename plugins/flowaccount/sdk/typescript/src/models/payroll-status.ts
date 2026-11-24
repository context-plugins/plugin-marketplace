import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * 0 = Draft 1 = Awaiting 2 = Reset 3 = Paid 4 = Partial 5 = Rejected 7 = Approved 11 =
 * PushPayAwaiting 13 = PushPayProcessed 15 = PushPayRejected 17 = PushPayPartial 19 =
 * PushPayPendingPayments 50 = KConnectAwaiting 52 = KConnectProcessed 54 = KConnectRejected 56 =
 * KConnectPendingPayments
 */
export const PayrollStatus = {
  _0: 0,
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
  _5: 5,
  _7: 7,
  _11: 11,
  _13: 13,
  _15: 15,
  _17: 17,
  _19: 19,
  _50: 50,
  _52: 52,
  _54: 54,
  _56: 56,
} as const;
export type PayrollStatus = (typeof PayrollStatus)[keyof typeof PayrollStatus] | (number & {});

export const payrollStatusSchema: EnumSchema<PayrollStatus> = s.enumOf<PayrollStatus>(PayrollStatus);
