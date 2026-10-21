import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  paymentMethodExpiresAtSchema,
  type PaymentMethodExpiresAt,
} from "./unions/payment-method-expires-at.js";

export type MattildaTapiOptions = {
  /**
   * Defines the date at which the payment will expire if not completed. Must be provided in ISO
   * 8601 format `(YYYY-MM-DD`). If not specified, it defaults to 7 days in the future from the
   * current date.
   */
  paymentMethodExpiresAt?: PaymentMethodExpiresAt;
};

export const mattildaTapiOptionsSchema: Schema<MattildaTapiOptions> = s.object<MattildaTapiOptions>({
  paymentMethodExpiresAt: s.optional(s.lazy(() => paymentMethodExpiresAtSchema)),
  _keysMap: {
    paymentMethodExpiresAt: "payment_method_expires_at",
  },
});
