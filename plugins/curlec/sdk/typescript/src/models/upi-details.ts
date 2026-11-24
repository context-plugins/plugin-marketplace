import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpiDetails = {
  payerAccountType?: string;
  /** Customer UPI VPA (Virtual Payment Address). Example: user@upi. */
  vpa?: string;
  /** UPI flow used: collect, intent, or in_app. */
  flow?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const upiDetailsSchema: Schema<UpiDetails> = s.object<UpiDetails>(
  {
    payerAccountType: s.optional(s.string()),
    vpa: s.optional(s.string()),
    flow: s.optional(s.string()),
    _keysMap: {
      payerAccountType: "payer_account_type",
    },
  },
  { additionalProperties: s.json() },
);
