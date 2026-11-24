import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Settlements1 = {
  accountNumber?: string;
  ifscCode?: string;
  beneficiaryName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const settlements1Schema: Schema<Settlements1> = s.object<Settlements1>(
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
