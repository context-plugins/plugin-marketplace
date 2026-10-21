import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  paypalOrderUpdateCallbackConfigSchema,
  type PaypalOrderUpdateCallbackConfig,
} from "../paypal-order-update-callback-config.js";

/** Configuration for server-side callbacks during the PayPal checkout flow. */
export type OrderUpdateCallbackConfig = PaypalOrderUpdateCallbackConfig;

export const orderUpdateCallbackConfigSchema: Schema<OrderUpdateCallbackConfig> =
  s.of<OrderUpdateCallbackConfig>(s.union([s.lazy(() => paypalOrderUpdateCallbackConfigSchema)]));
