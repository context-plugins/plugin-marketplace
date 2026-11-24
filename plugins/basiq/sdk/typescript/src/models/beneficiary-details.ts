import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Details about the beneficiary. */
export type BeneficiaryDetails = {
  /** The name of the beneficiary. */
  name?: string;
  /** The country of the beneficiary (ISO 3166-1 alpha-2). */
  country?: string;
  /** An optional message for the beneficiary. */
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const beneficiaryDetailsSchema: Schema<BeneficiaryDetails> = s.object<BeneficiaryDetails>(
  {
    name: s.optional(s.string()),
    country: s.optional(s.string()),
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
