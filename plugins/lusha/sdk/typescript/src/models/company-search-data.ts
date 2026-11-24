import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompanySearchData = {
  /** A unique identifier for a Lusha company */
  id?: string;
  /** The name of the company */
  name?: string;
  /** The fqdn of the company */
  fqdn?: string;
  /** A description of the company */
  description?: string;
  /** The URL of the company's logo */
  logoUrl?: string;
  hasCompanyEmployeesCount?: boolean;
  hasCompanyRevenue?: boolean;
  hasCompanyMainIndustry?: boolean;
  hasCompanySubIndustry?: boolean;
  hasCompanyFunding?: boolean;
  hasCompanyIntent?: boolean;
  hasCompanyTechnologies?: boolean;
  hasCompanyCity?: boolean;
  hasCompanyCountry?: boolean;
  /** Types of signals detected for this company */
  signalTypes?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companySearchDataSchema: Schema<CompanySearchData> = s.object<CompanySearchData>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    fqdn: s.optional(s.string()),
    description: s.optional(s.string()),
    logoUrl: s.optional(s.string()),
    hasCompanyEmployeesCount: s.optional(s.boolean()),
    hasCompanyRevenue: s.optional(s.boolean()),
    hasCompanyMainIndustry: s.optional(s.boolean()),
    hasCompanySubIndustry: s.optional(s.boolean()),
    hasCompanyFunding: s.optional(s.boolean()),
    hasCompanyIntent: s.optional(s.boolean()),
    hasCompanyTechnologies: s.optional(s.boolean()),
    hasCompanyCity: s.optional(s.boolean()),
    hasCompanyCountry: s.optional(s.boolean()),
    signalTypes: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
