import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Rpps disbursement dto when the disbursement type is ACH to verified national vendor. */
export type RppsDisbursement = {
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

export const rppsDisbursementSchema: Schema<RppsDisbursement> = s.object<RppsDisbursement>(
  {
    sentDate: s.optional(s.dateOnly()),
    arrivesByDate: s.optional(s.dateOnly()),
    traceNumber: s.optional(s.int()),
    batchNumber: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
