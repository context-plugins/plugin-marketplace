import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CheckDisbursement2 = {
  /** Check payment sent date */
  sentDate?: string;
  /** Check payment arrives by date */
  arrivesByDate?: string;
  /** Check number */
  checkNumber?: number;
  /**
   * UPS tracking number for the check. You get a tracking number only for a BILL Pay Faster check
   * payment.
   */
  trackingInformation?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const checkDisbursement2Schema: Schema<CheckDisbursement2> = s.object<CheckDisbursement2>(
  {
    sentDate: s.optional(s.dateOnly()),
    arrivesByDate: s.optional(s.dateOnly()),
    checkNumber: s.optional(s.int()),
    trackingInformation: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
