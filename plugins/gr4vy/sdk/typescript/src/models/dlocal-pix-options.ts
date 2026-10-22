import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scheduledDateSchema, type ScheduledDate } from "./unions/scheduled-date.js";
import { subscriptionSchema, type Subscription } from "./unions/subscription.js";

export type DlocalPixOptions = {
  /** Passes `subscription` data to the dLocal API for those connectors that need it. */
  subscription?: Subscription;
  /**
   * Defines scheduled payment start date. Must be provided in ISO 8601 format `(YYYY-MM-DD`). If
   * not specified, The default is 2 days in the future.
   */
  scheduledDate?: ScheduledDate;
};

export const dlocalPixOptionsSchema: Schema<DlocalPixOptions> = s.object<DlocalPixOptions>({
  subscription: s.optional(s.lazy(() => subscriptionSchema)),
  scheduledDate: s.optional(s.lazy(() => scheduledDateSchema)),
  _keysMap: {
    scheduledDate: "scheduled_date",
  },
});
