import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  subscriptionFrequencyUnitSchema,
  type SubscriptionFrequencyUnit,
} from "./subscription-frequency-unit.js";

export type DlocalUpiRecurringInfoOptions = {
  /**
   * Indicates the frequency unit for the subscription. Allowed values are: `DAY`, `WEEK`, `MONTH`,
   * `BI_MONTHLY`, `QUARTER`, `SEMI_ANNUALLY`, `YEAR`, `ONDEMAND`.
   */
  subscriptionFrequencyUnit: SubscriptionFrequencyUnit;
  /** Indicates the frequency for the subscription. */
  subscriptionFrequency: number;
  /** Indicates the start date for the subscription in format `YYYYMMDD`. */
  subscriptionStartAt: string;
  /** Indicates the end date for the subscription in format `YYYYMMDD`. */
  subscriptionEndAt: string;
};

export const dlocalUpiRecurringInfoOptionsSchema: Schema<DlocalUpiRecurringInfoOptions> =
  s.object<DlocalUpiRecurringInfoOptions>({
    subscriptionFrequencyUnit: subscriptionFrequencyUnitSchema,
    subscriptionFrequency: s.int(),
    subscriptionStartAt: s.string(),
    subscriptionEndAt: s.string(),
    _keysMap: {
      subscriptionFrequencyUnit: "subscription_frequency_unit",
      subscriptionFrequency: "subscription_frequency",
      subscriptionStartAt: "subscription_start_at",
      subscriptionEndAt: "subscription_end_at",
    },
  });
