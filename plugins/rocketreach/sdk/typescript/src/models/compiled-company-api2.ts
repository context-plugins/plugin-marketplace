import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { compiledCompanyAddress1Schema, type CompiledCompanyAddress1 } from "./compiled-company-address1.js";
import { linksSchema, type Links } from "./links.js";

/** Object representing the employer of the profile */
export type CompiledCompanyApi2 = {
  /** RocketReach internal unique company ID */
  id?: number;
  /** Name of the company */
  name?: string;
  /** Web domain for the company */
  domain?: string;
  /** Email domain for the company */
  emailDomain?: string;
  /** Website for the company */
  websiteDomain?: string | null;
  /** Ticker symbol for the company (if available) */
  tickerSymbol?: string | null;
  /** Social media links for the company */
  links?: Links | null;
  /** Year the company was founded */
  yearFounded?: number | null;
  /** Street address of the company */
  address?: CompiledCompanyAddress1;
  /** Phone number for the company */
  phone?: string | null;
  /** Fax number for the company */
  fax?: string | null;
  /** Number of employees working at the company */
  numEmployees?: number | null;
  /** Revenue of the company */
  revenue?: number | null;
  /** List of names of founding investors for the company */
  fundingInvestors?: string[];
  /** Industry of the company */
  industry?: string | null;
  /**
   * List of SIC codes for the company. Standard Industrial Classification (SIC) codes, are
   * four-digit numerical codes used to categorize businesses by their primary industry
   */
  sicCodes?: number[];
  /** URL of the RocketReach company profile page for the company */
  rrProfileUrl?: string;
  /** Description of the company */
  description?: string | null;
  /** List of industry keywords for the company */
  industryKeywords?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const compiledCompanyApi2Schema: Schema<CompiledCompanyApi2> = s.object<CompiledCompanyApi2>(
  {
    id: s.optional(s.int()),
    name: s.optional(s.string()),
    domain: s.optional(s.string()),
    emailDomain: s.optional(s.string()),
    websiteDomain: s.optionalNullable(s.string()),
    tickerSymbol: s.optionalNullable(s.string()),
    links: s.optionalNullable(s.lazy(() => linksSchema)),
    yearFounded: s.optionalNullable(s.int()),
    address: s.optional(s.lazy(() => compiledCompanyAddress1Schema)),
    phone: s.optionalNullable(s.string()),
    fax: s.optionalNullable(s.string()),
    numEmployees: s.optionalNullable(s.int()),
    revenue: s.optionalNullable(s.int()),
    fundingInvestors: s.optional(s.array(s.string())),
    industry: s.optionalNullable(s.string()),
    sicCodes: s.optional(s.array(s.int())),
    rrProfileUrl: s.optional(s.string()),
    description: s.optionalNullable(s.string()),
    industryKeywords: s.optional(s.array(s.string())),
    _keysMap: {
      emailDomain: "email_domain",
      websiteDomain: "website_domain",
      tickerSymbol: "ticker_symbol",
      yearFounded: "year_founded",
      numEmployees: "num_employees",
      fundingInvestors: "funding_investors",
      sicCodes: "sic_codes",
      rrProfileUrl: "rr_profile_url",
      industryKeywords: "industry_keywords",
    },
  },
  { additionalProperties: s.json() },
);
