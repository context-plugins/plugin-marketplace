import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  riskifiedAntiFraudOptionsShippingLineSchema,
  type RiskifiedAntiFraudOptionsShippingLine,
} from "../riskified-anti-fraud-options-shipping-line.js";

/**
 * A list of shipping lines details to override when passing to the Riskified API. Entries are
 * matched by position against the `shipping_fee` cart items.
 */
export type ShippingLines = RiskifiedAntiFraudOptionsShippingLine[];

export const shippingLinesSchema: Schema<ShippingLines> = s.of<ShippingLines>(
  s.union([s.array(s.lazy(() => riskifiedAntiFraudOptionsShippingLineSchema))]),
);
