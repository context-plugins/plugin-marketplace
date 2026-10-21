import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { shippingCarrier2Schema, type ShippingCarrier2 } from "./shipping-carrier2.js";
import { urlSchema, type Url } from "./unions/url.js";

export type Tracking = {
  /** The tracking number for the shipment. */
  number: string;
  /** The carrier handling the shipment. */
  carrier: ShippingCarrier2;
  /** The URL to track the shipment. */
  url?: Url;
};

export const trackingSchema: Schema<Tracking> = s.object<Tracking>({
  number: s.string(),
  carrier: shippingCarrier2Schema,
  url: s.optional(s.lazy(() => urlSchema)),
});
