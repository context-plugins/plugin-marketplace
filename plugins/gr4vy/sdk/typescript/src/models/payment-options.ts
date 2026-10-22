import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentOptionSchema, type PaymentOption } from "./payment-option.js";

export type PaymentOptions = {
  /** A list of items returned for this request. */
  items: PaymentOption[];
};

export const paymentOptionsSchema: Schema<PaymentOptions> = s.object<PaymentOptions>({
  items: s.array(s.lazy(() => paymentOptionSchema)),
});
