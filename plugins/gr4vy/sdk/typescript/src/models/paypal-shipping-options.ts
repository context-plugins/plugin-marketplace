import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { optionsSchema, type Options } from "./unions/options.js";

export type PaypalShippingOptions = {
  /**
   * Shipping options that the payee or merchant offers to the payer to ship or pick up their items.
   */
  options?: Options;
};

export const paypalShippingOptionsSchema: Schema<PaypalShippingOptions> = s.object<PaypalShippingOptions>({
  options: s.optional(s.lazy(() => optionsSchema)),
});
