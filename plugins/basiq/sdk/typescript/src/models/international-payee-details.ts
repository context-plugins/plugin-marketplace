import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bankDetailsSchema, type BankDetails } from "./bank-details.js";
import { beneficiaryDetailsSchema, type BeneficiaryDetails } from "./beneficiary-details.js";

/** Details specific to international payees. */
export type InternationalPayeeDetails = {
  /** Details about the beneficiary. */
  beneficiaryDetails?: BeneficiaryDetails;
  /** Details about the beneficiary's bank. */
  bankDetails?: BankDetails;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const internationalPayeeDetailsSchema: Schema<InternationalPayeeDetails> =
  s.object<InternationalPayeeDetails>(
    {
      beneficiaryDetails: s.optional(s.lazy(() => beneficiaryDetailsSchema)),
      bankDetails: s.optional(s.lazy(() => bankDetailsSchema)),
    },
    { additionalProperties: s.json() },
  );
