import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  dlocalPixSubscriptionAmountOptionsSchema,
  type DlocalPixSubscriptionAmountOptions,
} from "../dlocal-pix-subscription-amount-options.js";

/** Passes `subscription.amount` to the dLocal API for those connectors that need it. */
export type Amount3 = DlocalPixSubscriptionAmountOptions;

export const amount3Schema: Schema<Amount3> = s.of<Amount3>(
  s.union([s.lazy(() => dlocalPixSubscriptionAmountOptionsSchema)]),
);
