import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  dlocalPixSubscriptionOptionsSchema,
  type DlocalPixSubscriptionOptions,
} from "../dlocal-pix-subscription-options.js";

/** Passes `subscription` data to the dLocal API for those connectors that need it. */
export type Subscription = DlocalPixSubscriptionOptions;

export const subscriptionSchema: Schema<Subscription> = s.of<Subscription>(
  s.union([s.lazy(() => dlocalPixSubscriptionOptionsSchema)]),
);
