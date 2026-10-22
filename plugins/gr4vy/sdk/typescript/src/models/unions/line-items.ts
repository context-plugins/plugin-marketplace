import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  riskifiedAntiFraudOptionsLineItemSchema,
  type RiskifiedAntiFraudOptionsLineItem,
} from "../riskified-anti-fraud-options-line-item.js";

/**
 * A list of line items details to override when passing to the Riskified API. Entries are matched
 * by position against the cart items sent to Riskified, which excludes `discount`, `shipping_fee`,
 * `sales_tax` and `store_credit` items.
 */
export type LineItems = RiskifiedAntiFraudOptionsLineItem[];

export const lineItemsSchema: Schema<LineItems> = s.of<LineItems>(
  s.union([s.array(s.lazy(() => riskifiedAntiFraudOptionsLineItemSchema))]),
);
