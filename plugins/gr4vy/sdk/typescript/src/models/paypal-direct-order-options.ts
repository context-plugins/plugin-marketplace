import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaypalDirectOrderOptions = {
  /**
   * The ID of an existing PayPal order that was already created and approved by the buyer entirely
   * outside of Gr4vy. Gr4vy retrieves this order and authorizes (or captures) it directly, without
   * creating an order of its own.
   */
  orderId: string;
};

export const paypalDirectOrderOptionsSchema: Schema<PaypalDirectOrderOptions> =
  s.object<PaypalDirectOrderOptions>({
    orderId: s.string(),
    _keysMap: {
      orderId: "order_id",
    },
  });
