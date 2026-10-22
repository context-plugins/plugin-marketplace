import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { basicItemDataSchema, type BasicItemData } from "./unions/basic-item-data.js";
import { beneficiariesSchema, type Beneficiaries } from "./unions/beneficiaries.js";
import { deliveryDetailsSchema, type DeliveryDetails } from "./unions/delivery-details.js";

export type ForterAntiFraudOptionsCartItem = {
  /** Basic information about the cart item. */
  basicItemData?: BasicItemData;
  /** Details about how the item will be delivered. */
  deliveryDetails?: DeliveryDetails;
  /** List of beneficiaries who will receive this item. */
  beneficiaries?: Beneficiaries;
};

export const forterAntiFraudOptionsCartItemSchema: Schema<ForterAntiFraudOptionsCartItem> =
  s.object<ForterAntiFraudOptionsCartItem>({
    basicItemData: s.optional(s.lazy(() => basicItemDataSchema)),
    deliveryDetails: s.optional(s.lazy(() => deliveryDetailsSchema)),
    beneficiaries: s.optional(s.lazy(() => beneficiariesSchema)),
    _keysMap: {
      basicItemData: "basic_item_data",
      deliveryDetails: "delivery_details",
    },
  });
