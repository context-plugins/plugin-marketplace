import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Kyc1RazorpayPartnerStakeholdersApi = {
  /** Individual PAN. 4th character must be 'P'. */
  pan?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const kyc1RazorpayPartnerStakeholdersApiSchema: Schema<Kyc1RazorpayPartnerStakeholdersApi> =
  s.object<Kyc1RazorpayPartnerStakeholdersApi>(
    {
      pan: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
