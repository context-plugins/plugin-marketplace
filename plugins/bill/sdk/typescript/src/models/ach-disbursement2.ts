import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AchDisbursement2 = {
  /** ACH payment sent date */
  sentDate?: string;
  /** ACH payment arrives by date */
  arrivesByDate?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const achDisbursement2Schema: Schema<AchDisbursement2> = s.object<AchDisbursement2>(
  {
    sentDate: s.optional(s.dateOnly()),
    arrivesByDate: s.optional(s.dateOnly()),
  },
  { additionalProperties: s.json() },
);
