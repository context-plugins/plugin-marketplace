import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Primary intent of the checkout session. */
export const Intent = {
  ReviewAndPay: "REVIEW_AND_PAY",
  ExpressCheckout: "EXPRESS_CHECKOUT",
  AddCard: "ADD_CARD",
} as const;
export type Intent = (typeof Intent)[keyof typeof Intent] | (string & {});

export const intentSchema: EnumSchema<Intent> = s.enumOf<Intent>(Intent);
