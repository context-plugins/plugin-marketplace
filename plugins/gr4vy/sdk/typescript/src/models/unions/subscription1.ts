import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  klarnaSubscriptionOptionsSchema,
  type KlarnaSubscriptionOptions,
} from "../klarna-subscription-options.js";

/** Provides subscription information to Klarna. */
export type Subscription1 = KlarnaSubscriptionOptions;

export const subscription1Schema: Schema<Subscription1> = s.of<Subscription1>(
  s.union([s.lazy(() => klarnaSubscriptionOptionsSchema)]),
);
