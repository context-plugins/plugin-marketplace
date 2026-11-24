import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** ACH disbursement dto when the disbursement type is ach. */
export type AchDisbursement = {
  /** ACH payment sent date */
  sentDate?: string;
  /** ACH payment arrives by date */
  arrivesByDate?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const achDisbursementSchema: Schema<AchDisbursement> = s.object<AchDisbursement>(
  {
    sentDate: s.optional(s.dateOnly()),
    arrivesByDate: s.optional(s.dateOnly()),
  },
  { additionalProperties: s.json() },
);
