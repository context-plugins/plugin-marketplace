import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * 1 = Awaiting 3 = Approved 4 = PendingPayment 5 = Paid 6 = PaidByPaymentSlip 7 = Void 9 =
 * ApprovedAndProcessed 11 = Received 23 = ReceivedByPaymentSlip
 */
export const ExpenseStatus = {
  _1: 1,
  _3: 3,
  _4: 4,
  _5: 5,
  _6: 6,
  _7: 7,
  _9: 9,
  _11: 11,
  _23: 23,
} as const;
export type ExpenseStatus = (typeof ExpenseStatus)[keyof typeof ExpenseStatus] | (number & {});

export const expenseStatusSchema: EnumSchema<ExpenseStatus> = s.enumOf<ExpenseStatus>(ExpenseStatus);
