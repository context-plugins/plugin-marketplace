import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Settlements = {
  /** Bank account number for settlements. */
  accountNumber?: string;
  /** IFSC code of the settlement bank. */
  ifscCode?: string;
  /** Account holder name. */
  beneficiaryName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const settlementsSchema: Schema<Settlements> = s.object<Settlements>(
  {
    accountNumber: s.optional(s.string()),
    ifscCode: s.optional(s.string()),
    beneficiaryName: s.optional(s.string()),
    _keysMap: {
      accountNumber: "account_number",
      ifscCode: "ifsc_code",
      beneficiaryName: "beneficiary_name",
    },
  },
  { additionalProperties: s.json() },
);
