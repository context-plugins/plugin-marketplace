import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { buyerIntentSchema, type BuyerIntent } from "./buyer-intent.js";
import { companyIndustryDataSchema, type CompanyIndustryData } from "./company-industry-data.js";
import { companyTechnologySchema, type CompanyTechnology } from "./company-technology.js";
import { domainsSchema, type Domains } from "./domains.js";
import { fundingDataSchema, type FundingData } from "./funding-data.js";
import {
  industryPrimaryGroupDetailsResponseSchema,
  type IndustryPrimaryGroupDetailsResponse,
} from "./industry-primary-group-details-response.js";
import { locationResponseSchema, type LocationResponse } from "./location-response.js";
import { socialResponseSchema, type SocialResponse } from "./social-response.js";

export type CompanyResponse = {
  name: string;
  description?: string;
  domains?: Domains;
  homepageUrl?: string;
  fqdn: string;
  location?: LocationResponse;
  companySize?: number[];
  revenueRange?: number[];
  industryPrimaryGroup?: string;
  logoUrl?: string;
  social?: SocialResponse;
  specialities?: string[];
  technologies?: CompanyTechnology[];
  funding?: FundingData;
  industry?: CompanyIndustryData;
  intent?: BuyerIntent;
  industryPrimaryGroupDetails?: IndustryPrimaryGroupDetailsResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyResponseSchema: Schema<CompanyResponse> = s.object<CompanyResponse>(
  {
    name: s.string(),
    description: s.optional(s.string()),
    domains: s.optional(s.lazy(() => domainsSchema)),
    homepageUrl: s.optional(s.string()),
    fqdn: s.string(),
    location: s.optional(s.lazy(() => locationResponseSchema)),
    companySize: s.optional(s.array(s.float64())),
    revenueRange: s.optional(s.array(s.float64())),
    industryPrimaryGroup: s.optional(s.string()),
    logoUrl: s.optional(s.string()),
    social: s.optional(s.lazy(() => socialResponseSchema)),
    specialities: s.optional(s.array(s.string())),
    technologies: s.optional(s.array(s.lazy(() => companyTechnologySchema))),
    funding: s.optional(s.lazy(() => fundingDataSchema)),
    industry: s.optional(s.lazy(() => companyIndustryDataSchema)),
    intent: s.optional(s.lazy(() => buyerIntentSchema)),
    industryPrimaryGroupDetails: s.optional(s.lazy(() => industryPrimaryGroupDetailsResponseSchema)),
  },
  { additionalProperties: s.json() },
);
