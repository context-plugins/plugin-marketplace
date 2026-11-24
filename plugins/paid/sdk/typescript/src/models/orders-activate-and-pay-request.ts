import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type OrdersActivateAndPayRequest = {
  /** Stripe confirmation token for the payment method */
  confirmationToken: string;
  /** URL to redirect to after payment processing */
  returnUrl: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ordersActivateAndPayRequestSchema: Schema<OrdersActivateAndPayRequest> =
  s.object<OrdersActivateAndPayRequest>(
    {
      confirmationToken: s.string(),
      returnUrl: s.string(),
    },
    { additionalProperties: s.json() },
  );
