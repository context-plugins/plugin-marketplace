import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { intervalSchema, type Interval } from "./interval.js";

export type KlarnaSubscriptionOptions = {
  /**
   * The name of the subscription product. The recommended format includes a subscription id and
   * double curly brackets.
   */
  name: string;
  /** The cadence unit for the subscription plan. */
  interval: Interval;
  /** The number corresponding to the interval unit. */
  intervalCount: number;
  /** Reference to a SKU in the transaction's cart items to link subscription to. */
  reference: string;
};

export const klarnaSubscriptionOptionsSchema: Schema<KlarnaSubscriptionOptions> =
  s.object<KlarnaSubscriptionOptions>({
    name: s.string(),
    interval: intervalSchema,
    intervalCount: s.int(),
    reference: s.string(),
    _keysMap: {
      intervalCount: "interval_count",
    },
  });
