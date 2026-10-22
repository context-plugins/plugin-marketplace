import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";

/**
 * With Mollie Connect you can charge fees on payments that your app is processing on behalf of
 * other Mollie merchants.
 *
 * Setting an application fee on the subscription will ensure this fee is charged on each individual
 * payment.
 *
 * Refer to the `applicationFee` parameter on the [Get payment endpoint](get-payment) documentation
 * for more information.
 */
export type ApplicationFee4 = {
  /**
   * In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value`
   * field.
   */
  amount: Amount;
  description: string;
};

export const applicationFee4Schema: Schema<ApplicationFee4> = s.object<ApplicationFee4>({
  amount: amountSchema,
  description: s.string(),
});
