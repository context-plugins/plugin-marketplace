import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RppsDisbursement2 = {
  /** ACH payment to verified national vendor sent date */
  sentDate?: string;
  /** ACH payment to verified national vendor arrives by date */
  arrivesByDate?: string;
  /** Payment trace number. This value is used to uniquely identify a payment in a batch. */
  traceNumber?: number;
  /** Payment batch number */
  batchNumber?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rppsDisbursement2Schema: Schema<RppsDisbursement2> = s.object<RppsDisbursement2>(
  {
    sentDate: s.optional(s.dateOnly()),
    arrivesByDate: s.optional(s.dateOnly()),
    traceNumber: s.optional(s.int()),
    batchNumber: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
