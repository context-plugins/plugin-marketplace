import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Universal Credit Serializer for company details (API). */
export type UniversalCreditCompanySearchOutput = {
  /** RocketReach internal unique company ID */
  id?: number;
  /** Name of the company */
  name?: string;
  /** Ticker symbol of the company (if available) */
  tickerSymbol?: string;
  /** Industry of the company */
  industryStr?: string;
  /** City where the company is located */
  city?: string;
  /** Region where the company is located */
  region?: string;
  /** Country where the company is located */
  countryCode?: string;
  /** LinkedIn URL of the company */
  linkedinUrl?: string;
  /** Logo URL of the company */
  logoUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const universalCreditCompanySearchOutputSchema: Schema<UniversalCreditCompanySearchOutput> =
  s.object<UniversalCreditCompanySearchOutput>(
    {
      id: s.optional(s.int()),
      name: s.optional(s.string()),
      tickerSymbol: s.optional(s.string()),
      industryStr: s.optional(s.string()),
      city: s.optional(s.string()),
      region: s.optional(s.string()),
      countryCode: s.optional(s.string()),
      linkedinUrl: s.optional(s.string()),
      logoUrl: s.optional(s.string()),
      _keysMap: {
        tickerSymbol: "ticker_symbol",
        industryStr: "industry_str",
        countryCode: "country_code",
        linkedinUrl: "linkedin_url",
        logoUrl: "logo_url",
      },
    },
    { additionalProperties: s.json() },
  );
