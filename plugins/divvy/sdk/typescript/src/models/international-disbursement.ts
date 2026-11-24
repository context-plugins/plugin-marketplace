import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { disbursementSubTypeSchema, type DisbursementSubType } from "./disbursement-sub-type.js";

/** International disbursement dto when the disbursement type is international. */
export type InternationalDisbursement = {
  /** International ePayment sent date */
  sentDate?: string;
  /** International ePayment arrives by date */
  arrivesByDate?: string;
  /** Disbursement amount */
  amount?: number;
  disbursementSubType?: DisbursementSubType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const internationalDisbursementSchema: Schema<InternationalDisbursement> =
  s.object<InternationalDisbursement>(
    {
      sentDate: s.optional(s.dateOnly()),
      arrivesByDate: s.optional(s.dateOnly()),
      amount: s.optional(s.float64()),
      disbursementSubType: s.optional(s.lazy(() => disbursementSubTypeSchema)),
    },
    { additionalProperties: s.json() },
  );
