import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Current subscription status. `none` = never subscribed, `autorenew` = active and renewing,
 * `canceled` = active until period end, `expired` = no longer active, `trial` = in free trial,
 * `trial_canceled` = trial that will not convert.
 */
export const Status1 = {
  None: "none",
  Autorenew: "autorenew",
  Canceled: "canceled",
  Expired: "expired",
  Trial: "trial",
  TrialCanceled: "trial_canceled",
} as const;
export type Status1 = (typeof Status1)[keyof typeof Status1] | (string & {});

export const status1Schema: EnumSchema<Status1> = s.enumOf<Status1>(Status1);
