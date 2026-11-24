import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Details specific to biller payees. */
export type BillerPayeeDetails = {
  /** The BPAY biller code. */
  billerCode?: string;
  /** The Customer Reference Number for the biller. */
  crn?: string;
  /** The name of the biller. */
  billerName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const billerPayeeDetailsSchema: Schema<BillerPayeeDetails> = s.object<BillerPayeeDetails>(
  {
    billerCode: s.optional(s.string()),
    crn: s.optional(s.string()),
    billerName: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
