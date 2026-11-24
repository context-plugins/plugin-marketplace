import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Serializer for company details (API). */
export type CompiledCompanyPublicDetails = {
  /** RocketReach internal unique company ID */
  id?: number;
  /** Name of the company */
  name?: string;
  /** Email domain for the company */
  emailDomain?: string;
  /** Ticker symbol for the company (if available) */
  tickerSymbol?: string;
  /** Industry of the company */
  industryStr?: string;
  /** City of the company */
  city?: string;
  /** Region of the company */
  region?: string;
  /** Country code of the company */
  countryCode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const compiledCompanyPublicDetailsSchema: Schema<CompiledCompanyPublicDetails> =
  s.object<CompiledCompanyPublicDetails>(
    {
      id: s.optional(s.int()),
      name: s.optional(s.string()),
      emailDomain: s.optional(s.string()),
      tickerSymbol: s.optional(s.string()),
      industryStr: s.optional(s.string()),
      city: s.optional(s.string()),
      region: s.optional(s.string()),
      countryCode: s.optional(s.string()),
      _keysMap: {
        emailDomain: "email_domain",
        tickerSymbol: "ticker_symbol",
        industryStr: "industry_str",
        countryCode: "country_code",
      },
    },
    { additionalProperties: s.json() },
  );
