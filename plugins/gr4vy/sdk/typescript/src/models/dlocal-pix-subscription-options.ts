import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { frequencySchema, type Frequency } from "./frequency.js";
import { amount3Schema, type Amount3 } from "./unions/amount3.js";
import { endDateSchema, type EndDate } from "./unions/end-date.js";
import { startDateSchema, type StartDate } from "./unions/start-date.js";

export type DlocalPixSubscriptionOptions = {
  /** Passes `subscription.amount` to the dLocal API for those connectors that need it. */
  amount?: Amount3;
  /**
   * Indicates the frequency unit for the subscription. Allowed values are: `WEEKLY`, `MONTHLY`,
   * `QUARTERLY`, `SEMI_ANNUAL`, `ANNUAL`.
   */
  frequency: Frequency;
  /**
   * Defines subscription start date. Must be provided in ISO 8601 format `(YYYY-MM-DD`). If not
   * specified, The default is the current date.
   */
  startDate?: StartDate;
  /**
   * Defines subscription expiration date. Must be provided in ISO 8601 format `(YYYY-MM-DD`). If
   * not provided, the subscription will not expire.
   */
  endDate?: EndDate;
};

export const dlocalPixSubscriptionOptionsSchema: Schema<DlocalPixSubscriptionOptions> =
  s.object<DlocalPixSubscriptionOptions>({
    amount: s.optional(s.lazy(() => amount3Schema)),
    frequency: frequencySchema,
    startDate: s.optional(s.lazy(() => startDateSchema)),
    endDate: s.optional(s.lazy(() => endDateSchema)),
    _keysMap: {
      startDate: "start_date",
      endDate: "end_date",
    },
  });
