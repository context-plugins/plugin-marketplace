import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Bank reference numbers for tracking: RRN (UPI/netbanking), ARN (cards), UTR (NEFT/RTGS). */
export type AcquirerDataRazorpayRefundsApi = {
  arn?: string;
  rrn?: string;
  utr?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const acquirerDataRazorpayRefundsApiSchema: Schema<AcquirerDataRazorpayRefundsApi> =
  s.object<AcquirerDataRazorpayRefundsApi>(
    {
      arn: s.optional(s.string()),
      rrn: s.optional(s.string()),
      utr: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
