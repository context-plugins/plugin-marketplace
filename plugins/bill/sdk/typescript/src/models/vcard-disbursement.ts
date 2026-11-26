import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Virtual card disbursement dto when the disbursement type is virtual card. */
export type VcardDisbursement = {
  /** Virtual card payment arrives by date */
  arrivesByDate?: string;
  /** Date until when the card is valid */
  validUntil?: string;
  /** Masked number for virtual card */
  last4CardNumber?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const vcardDisbursementSchema: Schema<VcardDisbursement> = s.object<VcardDisbursement>(
  {
    arrivesByDate: s.optional(s.dateOnly()),
    validUntil: s.optional(s.dateOnly()),
    last4CardNumber: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
