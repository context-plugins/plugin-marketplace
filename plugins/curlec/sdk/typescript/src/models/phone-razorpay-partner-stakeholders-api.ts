import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PhoneRazorpayPartnerStakeholdersApi = {
  primary?: string;
  secondary?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const phoneRazorpayPartnerStakeholdersApiSchema: Schema<PhoneRazorpayPartnerStakeholdersApi> =
  s.object<PhoneRazorpayPartnerStakeholdersApi>(
    {
      primary: s.optional(s.string()),
      secondary: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
