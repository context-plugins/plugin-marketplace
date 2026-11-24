import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companyFundingSchema, type CompanyFunding } from "./company-funding.js";
import {
  companyHeadcountChangeSignalSchema,
  type CompanyHeadcountChangeSignal,
} from "./company-headcount-change-signal.js";
import {
  companyIndustryPrimaryGroupDetailsSchema,
  type CompanyIndustryPrimaryGroupDetails,
} from "./company-industry-primary-group-details.js";
import { companyIntentSchema, type CompanyIntent } from "./company-intent.js";
import { companyItSpendSignalSchema, type CompanyItSpendSignal } from "./company-it-spend-signal.js";
import { companyLocationSchema, type CompanyLocation } from "./company-location.js";
import {
  companyNewsSignalInternalSchema,
  companyNewsSignalSchema,
  type CompanyNewsSignal,
} from "./company-news-signal.js";
import {
  companySurgeInHiringByDepartmentSignalSchema,
  type CompanySurgeInHiringByDepartmentSignal,
} from "./company-surge-in-hiring-by-department-signal.js";
import {
  companySurgeInHiringByLocationSignalSchema,
  type CompanySurgeInHiringByLocationSignal,
} from "./company-surge-in-hiring-by-location-signal.js";
import {
  companySurgeInHiringSignalSchema,
  type CompanySurgeInHiringSignal,
} from "./company-surge-in-hiring-signal.js";
import { companyTechnologySchema, type CompanyTechnology } from "./company-technology.js";
import {
  companyWebsiteTrafficSignalSchema,
  type CompanyWebsiteTrafficSignal,
} from "./company-website-traffic-signal.js";

export type CompanyBulkResponse = {
  id?: number;
  lushaCompanyId?: string;
  name?: string;
  companySize?: number[];
  linkedinFollowers?: number;
  emailDomain?: string;
  companyLocations?: CompanyLocation[];
  alternativeName?: string;
  companyType?: string;
  lushaPopularityTier?: number;
  employeesInLinkedin?: number;
  revenueRange?: number[];
  fqdn?: string;
  founded?: string;
  description?: string;
  logoUrl?: string;
  industryPrimaryGroupDetails?: CompanyIndustryPrimaryGroupDetails;
  linkedin?: string;
  mainIndustry?: string;
  subIndustry?: string;
  city?: string;
  state?: string;
  country?: string;
  countryIso2?: string;
  continent?: string;
  rawLocation?: string;
  crunchbase?: string;
  specialities?: string[];
  funding?: CompanyFunding;
  intent?: CompanyIntent;
  technologies?: CompanyTechnology[];
  riskNews?: CompanyNewsSignal[];
  commercialActivityNews?: CompanyNewsSignal[];
  corporateStrategyNews?: CompanyNewsSignal[];
  financialEventsNews?: CompanyNewsSignal[];
  peopleNews?: CompanyNewsSignal[];
  marketIntelligenceNews?: CompanyNewsSignal[];
  productActivityNews?: CompanyNewsSignal[];
  surgeInHiring?: CompanySurgeInHiringSignal[];
  surgeInHiringByDepartment?: CompanySurgeInHiringByDepartmentSignal[];
  surgeInHiringByLocation?: CompanySurgeInHiringByLocationSignal[];
  websiteTrafficIncrease?: CompanyWebsiteTrafficSignal[];
  websiteTrafficDecrease?: CompanyWebsiteTrafficSignal[];
  itSpendIncrease?: CompanyItSpendSignal[];
  itSpendDecrease?: CompanyItSpendSignal[];
  headcountIncrease1M?: CompanyHeadcountChangeSignal[];
  headcountDecrease1M?: CompanyHeadcountChangeSignal[];
  headcountIncrease3M?: CompanyHeadcountChangeSignal[];
  headcountDecrease3M?: CompanyHeadcountChangeSignal[];
  headcountIncrease6M?: CompanyHeadcountChangeSignal[];
  headcountDecrease6M?: CompanyHeadcountChangeSignal[];
  headcountIncrease12M?: CompanyHeadcountChangeSignal[];
  headcountDecrease12M?: CompanyHeadcountChangeSignal[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companyBulkResponseProperties: s.Shape<CompanyBulkResponse> = {
  id: s.optional(s.float64()),
  lushaCompanyId: s.optional(s.string()),
  name: s.optional(s.string()),
  companySize: s.optional(s.array(s.float64())),
  linkedinFollowers: s.optional(s.int()),
  emailDomain: s.optional(s.string()),
  companyLocations: s.optional(s.array(s.lazy(() => companyLocationSchema))),
  alternativeName: s.optional(s.string()),
  companyType: s.optional(s.string()),
  lushaPopularityTier: s.optional(s.int()),
  employeesInLinkedin: s.optional(s.float64()),
  revenueRange: s.optional(s.array(s.float64())),
  fqdn: s.optional(s.string()),
  founded: s.optional(s.string()),
  description: s.optional(s.string()),
  logoUrl: s.optional(s.string()),
  industryPrimaryGroupDetails: s.optional(s.lazy(() => companyIndustryPrimaryGroupDetailsSchema)),
  linkedin: s.optional(s.string()),
  mainIndustry: s.optional(s.string()),
  subIndustry: s.optional(s.string()),
  city: s.optional(s.string()),
  state: s.optional(s.string()),
  country: s.optional(s.string()),
  countryIso2: s.optional(s.string()),
  continent: s.optional(s.string()),
  rawLocation: s.optional(s.string()),
  crunchbase: s.optional(s.string()),
  specialities: s.optional(s.array(s.string())),
  funding: s.optional(s.lazy(() => companyFundingSchema)),
  intent: s.optional(s.lazy(() => companyIntentSchema)),
  technologies: s.optional(s.array(s.lazy(() => companyTechnologySchema))),
  riskNews: s.optional(s.array(s.lazy(() => companyNewsSignalInternalSchema))),
  commercialActivityNews: s.optional(s.array(s.lazy(() => companyNewsSignalInternalSchema))),
  corporateStrategyNews: s.optional(s.array(s.lazy(() => companyNewsSignalInternalSchema))),
  financialEventsNews: s.optional(s.array(s.lazy(() => companyNewsSignalInternalSchema))),
  peopleNews: s.optional(s.array(s.lazy(() => companyNewsSignalInternalSchema))),
  marketIntelligenceNews: s.optional(s.array(s.lazy(() => companyNewsSignalInternalSchema))),
  productActivityNews: s.optional(s.array(s.lazy(() => companyNewsSignalInternalSchema))),
  surgeInHiring: s.optional(s.array(s.lazy(() => companySurgeInHiringSignalSchema))),
  surgeInHiringByDepartment: s.optional(s.array(s.lazy(() => companySurgeInHiringByDepartmentSignalSchema))),
  surgeInHiringByLocation: s.optional(s.array(s.lazy(() => companySurgeInHiringByLocationSignalSchema))),
  websiteTrafficIncrease: s.optional(s.array(s.lazy(() => companyWebsiteTrafficSignalSchema))),
  websiteTrafficDecrease: s.optional(s.array(s.lazy(() => companyWebsiteTrafficSignalSchema))),
  itSpendIncrease: s.optional(s.array(s.lazy(() => companyItSpendSignalSchema))),
  itSpendDecrease: s.optional(s.array(s.lazy(() => companyItSpendSignalSchema))),
  headcountIncrease1M: s.optional(s.array(s.lazy(() => companyHeadcountChangeSignalSchema))),
  headcountDecrease1M: s.optional(s.array(s.lazy(() => companyHeadcountChangeSignalSchema))),
  headcountIncrease3M: s.optional(s.array(s.lazy(() => companyHeadcountChangeSignalSchema))),
  headcountDecrease3M: s.optional(s.array(s.lazy(() => companyHeadcountChangeSignalSchema))),
  headcountIncrease6M: s.optional(s.array(s.lazy(() => companyHeadcountChangeSignalSchema))),
  headcountDecrease6M: s.optional(s.array(s.lazy(() => companyHeadcountChangeSignalSchema))),
  headcountIncrease12M: s.optional(s.array(s.lazy(() => companyHeadcountChangeSignalSchema))),
  headcountDecrease12M: s.optional(s.array(s.lazy(() => companyHeadcountChangeSignalSchema))),
  _keysMap: {
    headcountIncrease1M: "headcountIncrease1m",
    headcountDecrease1M: "headcountDecrease1m",
    headcountIncrease3M: "headcountIncrease3m",
    headcountDecrease3M: "headcountDecrease3m",
    headcountIncrease6M: "headcountIncrease6m",
    headcountDecrease6M: "headcountDecrease6m",
    headcountIncrease12M: "headcountIncrease12m",
    headcountDecrease12M: "headcountDecrease12m",
  },
};

export const companyBulkResponseInternalSchema: Schema<CompanyBulkResponse> = s.object<CompanyBulkResponse>(
  companyBulkResponseProperties,
  { additionalProperties: s.json() },
);

export const companyBulkResponseSchema: Schema<CompanyBulkResponse> = s.lazySchema(() =>
  s.object<CompanyBulkResponse>(
    {
      ...companyBulkResponseProperties,
      riskNews: s.optional(s.array(s.lazy(() => companyNewsSignalSchema))),
      commercialActivityNews: s.optional(s.array(s.lazy(() => companyNewsSignalSchema))),
      corporateStrategyNews: s.optional(s.array(s.lazy(() => companyNewsSignalSchema))),
      financialEventsNews: s.optional(s.array(s.lazy(() => companyNewsSignalSchema))),
      peopleNews: s.optional(s.array(s.lazy(() => companyNewsSignalSchema))),
      marketIntelligenceNews: s.optional(s.array(s.lazy(() => companyNewsSignalSchema))),
      productActivityNews: s.optional(s.array(s.lazy(() => companyNewsSignalSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
