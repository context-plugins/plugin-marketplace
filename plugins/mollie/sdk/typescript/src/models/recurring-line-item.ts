import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount12Schema, type Amount12 } from "./amount12.js";

export type RecurringLineItem = {
  /**
   * A description of the recurring item. If not present, the main description of the item will be
   * used.
   */
  description?: string;
  /**
   * Cadence unit of the recurring item. For example: `12 months`, `52 weeks` or `365 days`.
   *
   * Possible values: `... days`, `... weeks`, `... months`.
   */
  interval: string;
  /** Total amount and currency of the recurring item. */
  amount?: Amount12;
  /**
   * Total number of charges for the subscription to complete. Leave empty for ongoing subscription.
   */
  times?: number;
  /** The start date of the subscription if it does not start right away (format `YYYY-MM-DD`) */
  startDate?: string | null;
};

export const recurringLineItemSchema: Schema<RecurringLineItem> = s.object<RecurringLineItem>({
  description: s.optional(s.string()),
  interval: s.string(),
  amount: s.optional(s.lazy(() => amount12Schema)),
  times: s.optional(s.int()),
  startDate: s.optionalNullable(s.string()),
});
