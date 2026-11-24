import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ValidateEmailResponse = {
  address?: string;
  status?: string;
  subStatus?: string;
  freeEmail?: string;
  didYouMean?: string;
  account?: string;
  domain?: string;
  domainAgeDays?: string;
  smtpProvider?: string;
  mxFound?: string;
  firstname?: string;
  lastname?: string;
  gender?: string;
  country?: string;
  region?: string;
  city?: string;
  zipcode?: string;
  processedAt?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const validateEmailResponseSchema: Schema<ValidateEmailResponse> = s.object<ValidateEmailResponse>(
  {
    address: s.optional(s.string()),
    status: s.optional(s.string()),
    subStatus: s.optional(s.string()),
    freeEmail: s.optional(s.string()),
    didYouMean: s.optional(s.string()),
    account: s.optional(s.string()),
    domain: s.optional(s.string()),
    domainAgeDays: s.optional(s.string()),
    smtpProvider: s.optional(s.string()),
    mxFound: s.optional(s.string()),
    firstname: s.optional(s.string()),
    lastname: s.optional(s.string()),
    gender: s.optional(s.string()),
    country: s.optional(s.string()),
    region: s.optional(s.string()),
    city: s.optional(s.string()),
    zipcode: s.optional(s.string()),
    processedAt: s.optional(s.string()),
    _keysMap: {
      subStatus: "sub_status",
      freeEmail: "free_email",
      didYouMean: "did_you_mean",
      domainAgeDays: "domain_age_days",
      smtpProvider: "smtp_provider",
      mxFound: "mx_found",
      processedAt: "processed_at",
    },
  },
  { additionalProperties: s.json() },
);
