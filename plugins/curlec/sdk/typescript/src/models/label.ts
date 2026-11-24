import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Map of field names to custom label text. Supports localisation (Hindi, Tamil, etc.). */
export type Label = {
  paymentFor?: string;
  receiptNo?: string;
  amountPayable?: string;
  expiresOn?: string;
  due?: string;
  paid?: string;
  amountPaid?: string;
  issuedTo?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const labelSchema: Schema<Label> = s.object<Label>(
  {
    paymentFor: s.optional(s.string()),
    receiptNo: s.optional(s.string()),
    amountPayable: s.optional(s.string()),
    expiresOn: s.optional(s.string()),
    due: s.optional(s.string()),
    paid: s.optional(s.string()),
    amountPaid: s.optional(s.string()),
    issuedTo: s.optional(s.string()),
    _keysMap: {
      paymentFor: "PAYMENT FOR",
      receiptNo: "RECEIPT NO.",
      amountPayable: "AMOUNT PAYABLE",
      expiresOn: "EXPIRES ON",
      due: "DUE",
      paid: "PAID",
      amountPaid: "AMOUNT PAID",
      issuedTo: "ISSUED TO",
    },
  },
  { additionalProperties: s.json() },
);
