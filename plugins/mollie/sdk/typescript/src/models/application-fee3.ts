import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount16Schema, type Amount16 } from "./amount16.js";

/**
 * With Mollie Connect you can charge fees on payment links that your app is processing on behalf of
 * other Mollie merchants.
 *
 * If you use OAuth to create payment links on a connected merchant's account, you can charge a fee
 * using this `applicationFee` parameter. If a payment on the payment link succeeds, the fee will be
 * deducted from the merchant's balance and sent to your own account balance.
 */
export type ApplicationFee3 = {
  /**
   * The fee that you wish to charge.
   *
   * Be careful to leave enough space for Mollie's own fees to be deducted as well. For example, you
   * cannot charge a €0.99 fee on a €1.00 payment.
   */
  amount: Amount16;
  /**
   * The description of the application fee. This will appear on settlement reports towards both you
   * and the connected merchant.
   */
  description: string;
};

export const applicationFee3Schema: Schema<ApplicationFee3> = s.object<ApplicationFee3>({
  amount: amount16Schema,
  description: s.string(),
});
