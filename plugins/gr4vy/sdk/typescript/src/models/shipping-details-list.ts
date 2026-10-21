import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { shippingDetailsSchema, type ShippingDetails } from "./shipping-details.js";

export type ShippingDetailsList = {
  /** A list of items returned for this request. */
  items: ShippingDetails[];
};

export const shippingDetailsListSchema: Schema<ShippingDetailsList> = s.object<ShippingDetailsList>({
  items: s.array(s.lazy(() => shippingDetailsSchema)),
});
