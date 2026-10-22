import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CheckoutSessionCardDetailsRequest = {
  /** The first 6 to 8 digits of a card number. */
  bin: string;
};

export const checkoutSessionCardDetailsRequestSchema: Schema<CheckoutSessionCardDetailsRequest> =
  s.object<CheckoutSessionCardDetailsRequest>({
    bin: s.string(),
  });
