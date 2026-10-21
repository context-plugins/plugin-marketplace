import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deliveryMethod1Schema, type DeliveryMethod1 } from "./unions/delivery-method1.js";
import { deliveryType11Schema, type DeliveryType11 } from "./unions/delivery-type11.js";

export type ForterAntiFraudOptionsCartItemDeliveryDetails = {
  /** The type of delivery for this cart item. */
  deliveryType?: DeliveryType11;
  /** The method of delivery for this cart item. */
  deliveryMethod?: DeliveryMethod1;
};

export const forterAntiFraudOptionsCartItemDeliveryDetailsSchema: Schema<ForterAntiFraudOptionsCartItemDeliveryDetails> =
  s.object<ForterAntiFraudOptionsCartItemDeliveryDetails>({
    deliveryType: s.optional(s.lazy(() => deliveryType11Schema)),
    deliveryMethod: s.optional(s.lazy(() => deliveryMethod1Schema)),
    _keysMap: {
      deliveryType: "delivery_type",
      deliveryMethod: "delivery_method",
    },
  });
