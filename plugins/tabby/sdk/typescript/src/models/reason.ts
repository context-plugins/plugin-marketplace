import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Reason for requesting dispute challenge:
 *   - `merchant_reason_other` - there were other problems with the order that required further
 *     clarification;
 *   - `merchant_reason_order_on_its_way` - the order has been confirmed and is in the process of
 *     being delivered;
 *   - `merchant_reason_order_has_been_already_delivered` - the order has already been delivered and
 *     is complete;
 *   - `merchant_reason_order_amount_should_be_different` - there was a problem with the amount of
 *     the order and it needed to be changed;
 *   - `merchant_reason_problem_with_delivery` - there was a problem with the order during delivery
 *     that needed to be adjusted and resolved.
 */
export const Reason = {
  MerchantReasonOther: "merchant_reason_other",
  MerchantReasonOrderOnItsWay: "merchant_reason_order_on_its_way",
  MerchantReasonOrderHasBeenAlreadyDelivered: "merchant_reason_order_has_been_already_delivered",
  MerchantReasonOrderAmountShouldBeDifferent: "merchant_reason_order_amount_should_be_different",
  MerchantReasonProblemWithDelivery: "merchant_reason_problem_with_delivery",
} as const;
export type Reason = (typeof Reason)[keyof typeof Reason] | (string & {});

export const reasonSchema: EnumSchema<Reason> = s.enumOf<Reason>(Reason);
