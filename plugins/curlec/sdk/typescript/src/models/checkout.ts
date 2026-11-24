import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { configSchema, type Config } from "./config.js";
import { method1Schema, type Method1 } from "./method1.js";
import { partialPaymentSchema, type PartialPayment } from "./partial-payment.js";
import { themeSchema, type Theme } from "./theme.js";

export type Checkout = {
  /** Custom business name displayed on checkout. */
  name?: string;
  theme?: Theme;
  /** Enable or disable specific payment methods. */
  method?: Method1;
  /** Advanced checkout display configuration (blocks, sequence, preferences). */
  config?: Config;
  /** Rename partial payment labels (for localisation). */
  partialPayment?: PartialPayment;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const checkoutSchema: Schema<Checkout> = s.object<Checkout>(
  {
    name: s.optional(s.string()),
    theme: s.optional(s.lazy(() => themeSchema)),
    method: s.optional(s.lazy(() => method1Schema)),
    config: s.optional(s.lazy(() => configSchema)),
    partialPayment: s.optional(s.lazy(() => partialPaymentSchema)),
    _keysMap: {
      partialPayment: "partial_payment",
    },
  },
  { additionalProperties: s.json() },
);
