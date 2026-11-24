import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompanyProfile = {
  symbol?: string;
  companyName?: string;
  industry?: string;
  sector?: string;
  country?: string;
  ceo?: string;
  website?: string;
  description?: string;
  exchange?: string;
  currency?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyProfileSchema: Schema<CompanyProfile> = s.object<CompanyProfile>(
  {
    symbol: s.optional(s.string()),
    companyName: s.optional(s.string()),
    industry: s.optional(s.string()),
    sector: s.optional(s.string()),
    country: s.optional(s.string()),
    ceo: s.optional(s.string()),
    website: s.optional(s.string()),
    description: s.optional(s.string()),
    exchange: s.optional(s.string()),
    currency: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
