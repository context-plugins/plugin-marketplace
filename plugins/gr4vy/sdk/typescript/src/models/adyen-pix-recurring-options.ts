import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { endsatSchema, type Endsat } from "./unions/endsat.js";
import { frequency1Schema, type Frequency1 } from "./unions/frequency1.js";
import { recurringAmountSchema, type RecurringAmount } from "./unions/recurring-amount.js";
import { recurringstatementSchema, type Recurringstatement } from "./unions/recurringstatement.js";
import { startsatSchema, type Startsat } from "./unions/startsat.js";

export type AdyenPixRecurringOptions = {
  /**
   * The frequency at which the shopper will be charged. Possible values: weekly, monthly,
   * quarterly, half-yearly, and yearly.
   */
  frequency?: Frequency1;
  /**
   * For a billing plan where the payment amount is fixed, the currency and value for each recurring
   * payment
   */
  recurringAmount: RecurringAmount;
  /** Start date of the billing plan, in YYYY-MM-DD format. */
  startsAt?: Startsat;
  /**
   * End date of the billing plan, in YYYY-MM-DD format. The end date must align with the frequency
   * and the start date of the billing plan. If left blank, the subscription will continue
   * indefinitely unless it is cancelled by the shopper.
   */
  endsAt?: Endsat;
  /**
   * The text that that will be shown on the shopper's bank statement for the recurring payments. We
   * recommend to add a descriptive text about the subscription to let your shoppers recognize your
   * recurring payments.
   */
  recurringStatement?: Recurringstatement;
};

export const adyenPixRecurringOptionsSchema: Schema<AdyenPixRecurringOptions> =
  s.object<AdyenPixRecurringOptions>({
    frequency: s.optional(s.lazy(() => frequency1Schema)),
    recurringAmount: recurringAmountSchema,
    startsAt: s.optional(s.lazy(() => startsatSchema)),
    endsAt: s.optional(s.lazy(() => endsatSchema)),
    recurringStatement: s.optional(s.lazy(() => recurringstatementSchema)),
  });
