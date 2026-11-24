import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Bpay = {
  /** BPAY Biller Code for the transaction. */
  billerCode?: string;
  /** Name of the BPAY biller for the transaction. */
  billerName?: string;
  /** CRN for the transaction. */
  crn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bpaySchema: Schema<Bpay> = s.object<Bpay>(
  {
    billerCode: s.optional(s.string()),
    billerName: s.optional(s.string()),
    crn: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
