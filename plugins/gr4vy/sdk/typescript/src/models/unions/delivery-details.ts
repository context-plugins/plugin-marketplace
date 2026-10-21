import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  forterAntiFraudOptionsCartItemDeliveryDetailsSchema,
  type ForterAntiFraudOptionsCartItemDeliveryDetails,
} from "../forter-anti-fraud-options-cart-item-delivery-details.js";

/** Details about how the item will be delivered. */
export type DeliveryDetails = ForterAntiFraudOptionsCartItemDeliveryDetails;

export const deliveryDetailsSchema: Schema<DeliveryDetails> = s.of<DeliveryDetails>(
  s.union([s.lazy(() => forterAntiFraudOptionsCartItemDeliveryDetailsSchema)]),
);
