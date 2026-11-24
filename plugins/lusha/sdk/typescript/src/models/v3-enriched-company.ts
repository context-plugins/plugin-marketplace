import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { additionalIndustrySchema, type AdditionalIndustry } from "./additional-industry.js";
import { competitorSchema, type Competitor } from "./competitor.js";
import { employeeCountSchema, type EmployeeCount } from "./employee-count.js";
import { employeesByDepartmentSchema, type EmployeesByDepartment } from "./employees-by-department.js";
import { employeesByLocationSchema, type EmployeesByLocation } from "./employees-by-location.js";
import { employeesBySenioritySchema, type EmployeesBySeniority } from "./employees-by-seniority.js";
import { estimatedAnnualItSpendSchema, type EstimatedAnnualItSpend } from "./estimated-annual-it-spend.js";
import { monthlyWebsiteTrafficSchema, type MonthlyWebsiteTraffic } from "./monthly-website-traffic.js";
import { revenueRangeSchema, type RevenueRange } from "./revenue-range.js";
import { socialLinks1Schema, type SocialLinks1 } from "./social-links1.js";
import { v3CompanyLocationSchema, type V3CompanyLocation } from "./v3-company-location.js";
import { v3ItemErrorSchema, type V3ItemError } from "./v3-item-error.js";
import { v3NaicsCodeSchema, type V3NaicsCode } from "./v3-naics-code.js";
import { v3SicCodeSchema, type V3SicCode } from "./v3-sic-code.js";

export type V3EnrichedCompany = {
  id?: string;
  name?: string;
  alternativeName?: string;
  domain?: string;
  alternativeDomains?: string[];
  description?: string;
  companyType?: string;
  yearFounded?: number;
  employeeCount?: EmployeeCount;
  industry?: string;
  subIndustry?: string;
  specialities?: string[];
  industryTags?: string[];
  sicCodes?: V3SicCode[];
  naicsCodes?: V3NaicsCode[];
  /** Free field. Short description of what the company sells or does. */
  companyOffering?: string;
  /** Free field. Primary domain used for company email addresses. */
  emailDomain?: string;
  /**
   * Free field. Up to 2 secondary industry classifications beyond the primary
   * `industry`/`subIndustry`.
   */
  additionalIndustries?: AdditionalIndustry[];
  /**
   * Revealed via reveal: ["estimatedAnnualItSpend"] in Enrich Companies. Charged 1 credit when
   * non-null.
   */
  estimatedAnnualItSpend?: EstimatedAnnualItSpend | null;
  /**
   * Revealed via reveal: ["monthlyWebsiteTraffic"] in Enrich Companies. Charged 1 credit when
   * non-null.
   */
  monthlyWebsiteTraffic?: MonthlyWebsiteTraffic | null;
  location?: V3CompanyLocation;
  additionalLocations?: V3CompanyLocation[];
  socialLinks?: SocialLinks1;
  linkedinFollowers?: number;
  revenueRange?: RevenueRange;
  /** Funding payload when present */
  funding?: Record<string, unknown>;
  /** Intent payload when present */
  intent?: Record<string, unknown>;
  technologies?: string[];
  popularityTier?: number;
  logoUrl?: string;
  /**
   * Breakdown of employees by department. Revealed via `reveal: ["employeesByDepartment"]` in
   * Enrich Companies.
   */
  employeesByDepartment?: EmployeesByDepartment[];
  /**
   * Breakdown of employees by country and state. Revealed via `reveal: ["employeesByLocation"]` in
   * Enrich Companies.
   */
  employeesByLocation?: EmployeesByLocation[];
  /**
   * Breakdown of employees by seniority level. Revealed via `reveal: ["employeesBySeniority"]` in
   * Enrich Companies.
   */
  employeesBySeniority?: EmployeesBySeniority[];
  /**
   * List of competitor companies. Revealed via `reveal: ["competitors"]` in Enrich Companies. Use
   * Enrich Companies with the returned IDs to get full firmographic data on each competitor.
   */
  competitors?: Competitor[];
  /** Company business model classification (e.g. B2B, B2C) */
  businessModel?: string[];
  /** Company phone number */
  phone?: string;
  /** Company contact email address */
  email?: string;
  /** Keywords associated with the company (normalized from specialities and description) */
  keywords?: string[];
  /** Normalized version of the specialities list */
  specialitiesRefactored?: string[];
  /** Per-item error in a batch response */
  error?: V3ItemError;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v3EnrichedCompanyProperties: s.Shape<V3EnrichedCompany> = {
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  alternativeName: s.optional(s.string()),
  domain: s.optional(s.string()),
  alternativeDomains: s.optional(s.array(s.string())),
  description: s.optional(s.string()),
  companyType: s.optional(s.string()),
  yearFounded: s.optional(s.float64()),
  employeeCount: s.optional(s.lazy(() => employeeCountSchema)),
  industry: s.optional(s.string()),
  subIndustry: s.optional(s.string()),
  specialities: s.optional(s.array(s.string())),
  industryTags: s.optional(s.array(s.string())),
  sicCodes: s.optional(s.array(s.lazy(() => v3SicCodeSchema))),
  naicsCodes: s.optional(s.array(s.lazy(() => v3NaicsCodeSchema))),
  companyOffering: s.optional(s.string()),
  emailDomain: s.optional(s.string()),
  additionalIndustries: s.optional(s.array(s.lazy(() => additionalIndustrySchema))),
  estimatedAnnualItSpend: s.optionalNullable(s.lazy(() => estimatedAnnualItSpendSchema)),
  monthlyWebsiteTraffic: s.optionalNullable(s.lazy(() => monthlyWebsiteTrafficSchema)),
  location: s.optional(s.lazy(() => v3CompanyLocationSchema)),
  additionalLocations: s.optional(s.array(s.lazy(() => v3CompanyLocationSchema))),
  socialLinks: s.optional(s.lazy(() => socialLinks1Schema)),
  linkedinFollowers: s.optional(s.float64()),
  revenueRange: s.optional(s.lazy(() => revenueRangeSchema)),
  funding: s.optional(s.record(s.string(), s.unknown())),
  intent: s.optional(s.record(s.string(), s.unknown())),
  technologies: s.optional(s.array(s.string())),
  popularityTier: s.optional(s.float64()),
  logoUrl: s.optional(s.string()),
  employeesByDepartment: s.optional(s.array(s.lazy(() => employeesByDepartmentSchema))),
  employeesByLocation: s.optional(s.array(s.lazy(() => employeesByLocationSchema))),
  employeesBySeniority: s.optional(s.array(s.lazy(() => employeesBySenioritySchema))),
  competitors: s.optional(s.array(s.lazy(() => competitorSchema))),
  businessModel: s.optional(s.array(s.string())),
  phone: s.optional(s.string()),
  email: s.optional(s.string()),
  keywords: s.optional(s.array(s.string())),
  specialitiesRefactored: s.optional(s.array(s.string())),
  error: s.optional(s.lazy(() => v3ItemErrorSchema)),
};

export const v3EnrichedCompanyInternalSchema: Schema<V3EnrichedCompany> = s.object<V3EnrichedCompany>(
  v3EnrichedCompanyProperties,
  { additionalProperties: s.json() },
);

export const v3EnrichedCompanySchema: Schema<V3EnrichedCompany> = s.lazySchema(() =>
  s.object<V3EnrichedCompany>(
    {
      ...v3EnrichedCompanyProperties,
      additionalIndustries: s.optional(s.array(s.lazy(() => additionalIndustrySchema)).check(s.maxLength(2))),
    },
    { additionalProperties: s.json() },
  ),
);
