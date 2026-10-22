import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ClickToPaySession = {
  /** The ID of the Click to Pay application. */
  digitalPaymentApplicationId: string;
  /** The merchant name as configured ont he the Click to Pay wallet. */
  digitalPaymentApplicationName: string;
};

export const clickToPaySessionSchema: Schema<ClickToPaySession> = s.object<ClickToPaySession>({
  digitalPaymentApplicationId: s.string(),
  digitalPaymentApplicationName: s.string(),
  _keysMap: {
    digitalPaymentApplicationId: "digital_payment_application_id",
    digitalPaymentApplicationName: "digital_payment_application_name",
  },
});
