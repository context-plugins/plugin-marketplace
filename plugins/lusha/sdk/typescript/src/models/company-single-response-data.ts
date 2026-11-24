import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companyFunding1Schema, type CompanyFunding1 } from "./company-funding1.js";
import {
  companyHeadcountChangeSignalSchema,
  type CompanyHeadcountChangeSignal,
} from "./company-headcount-change-signal.js";
import {
  companyIndustryPrimaryGroupDetailsSchema,
  type CompanyIndustryPrimaryGroupDetails,
} from "./company-industry-primary-group-details.js";
import { companyIntent1Schema, type CompanyIntent1 } from "./company-intent1.js";
import { companyItSpendSignalSchema, type CompanyItSpendSignal } from "./company-it-spend-signal.js";
import { companyLocationResponseSchema, type CompanyLocationResponse } from "./company-location-response.js";
import { companyLocationSchema, type CompanyLocation } from "./company-location.js";
import {
  companyNewsSignalInternalSchema,
  companyNewsSignalSchema,
  type CompanyNewsSignal,
} from "./company-news-signal.js";
import { companySizeSchema, type CompanySize } from "./company-size.js";
import { companySocialResponse1Schema, type CompanySocialResponse1 } from "./company-social-response1.js";
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

export type CompanySingleResponseData = {
  /** A unique identifier for the Lusha company. */
  id: number;
  /** A brief description of the company. */
  description?: string;
  /** The domain name associated with the company's email addresses. */
  domain?: string;
  /** The company's employee size range. */
  employees?: string;
  /** The year the company was founded. */
  founded?: string;
  /** The fully qualified domain name of the company. */
  fqdn?: string;
  /** The URL of the company's logo. */
  logoUrl?: string;
  /** The name of the company. */
  name: string;
  /** LinkedIn followers count for the company */
  linkedinFollowers?: number;
  /** Company email domain */
  emailDomain?: string;
  /** All known company locations (not just HQ). */
  companyLocations?: CompanyLocation[];
  /** Normalized alternative company name */
  alternativeName?: string;
  /** Type of company */
  companyType?: string;
  /**
   * A proprietary ranking used by Lusha to categorize companies based on their popularity in the
   * platform
   */
  lushaPopularityTier?: number;
  /** Company size details. */
  companySize?: CompanySize;
  /** The company's revenue range. */
  revenueRange?: number[];
  /** The main industry of the company. */
  mainIndustry?: string;
  /** The specific sub-sector within the primary industry. */
  subIndustry?: string;
  /** Social media links associated with the company. */
  social?: CompanySocialResponse1;
  /** The full address of the company's location. */
  address?: string;
  /** HQ location only. For all company site locations, see companyLocations. */
  location?: CompanyLocationResponse;
  /** LinkedIn industry tags for the company. */
  categories?: string[];
  industryPrimaryGroupDetails?: CompanyIndustryPrimaryGroupDetails;
  /** The company's website URL. */
  website?: string;
  /** LinkedIn specialties tags associated with the company. */
  specialities?: string[];
  /** Details regarding the company's funding activities. */
  funding?: CompanyFunding1;
  /**
   * A list of detected intent topics related to the company based on your account's mapped topics.
   */
  intent?: CompanyIntent1;
  /** A list of technologies associated with the company. */
  technologies?: CompanyTechnology[];
  /** Litigations and security news signals */
  riskNews?: CompanyNewsSignal[];
  /** Launches, partnerships, and go-to-market activity signals */
  commercialActivityNews?: CompanyNewsSignal[];
  /** M&A, restructuring, or strategic direction change signals */
  corporateStrategyNews?: CompanyNewsSignal[];
  /** Funding, IPOs, and financial performance event signals */
  financialEventsNews?: CompanyNewsSignal[];
  /** Hiring, layoffs, or leadership change signals */
  peopleNews?: CompanyNewsSignal[];
  /** Event participation, recognition, and competitor activity signals */
  marketIntelligenceNews?: CompanyNewsSignal[];
  /** Product launch, development, and integration news signals */
  productActivityNews?: CompanyNewsSignal[];
  /** Overall hiring surge signals */
  surgeInHiring?: CompanySurgeInHiringSignal[];
  /** Department-specific hiring surge signals */
  surgeInHiringByDepartment?: CompanySurgeInHiringByDepartmentSignal[];
  /** Location-specific hiring surge signals */
  surgeInHiringByLocation?: CompanySurgeInHiringByLocationSignal[];
  /** Website traffic increase signals */
  websiteTrafficIncrease?: CompanyWebsiteTrafficSignal[];
  /** Website traffic decrease signals */
  websiteTrafficDecrease?: CompanyWebsiteTrafficSignal[];
  /** IT spending increase signals */
  itSpendIncrease?: CompanyItSpendSignal[];
  /** IT spending decrease signals */
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

const companySingleResponseDataProperties: s.Shape<CompanySingleResponseData> = {
  id: s.float64(),
  description: s.optional(s.string()),
  domain: s.optional(s.string()),
  employees: s.optional(s.string()),
  founded: s.optional(s.string()),
  fqdn: s.optional(s.string()),
  logoUrl: s.optional(s.string()),
  name: s.string(),
  linkedinFollowers: s.optional(s.int()),
  emailDomain: s.optional(s.string()),
  companyLocations: s.optional(s.array(s.lazy(() => companyLocationSchema))),
  alternativeName: s.optional(s.string()),
  companyType: s.optional(s.string()),
  lushaPopularityTier: s.optional(s.int()),
  companySize: s.optional(s.lazy(() => companySizeSchema)),
  revenueRange: s.optional(s.array(s.float64())),
  mainIndustry: s.optional(s.string()),
  subIndustry: s.optional(s.string()),
  social: s.optional(s.lazy(() => companySocialResponse1Schema)),
  address: s.optional(s.string()),
  location: s.optional(s.lazy(() => companyLocationResponseSchema)),
  categories: s.optional(s.array(s.string())),
  industryPrimaryGroupDetails: s.optional(s.lazy(() => companyIndustryPrimaryGroupDetailsSchema)),
  website: s.optional(s.string()),
  specialities: s.optional(s.array(s.string())),
  funding: s.optional(s.lazy(() => companyFunding1Schema)),
  intent: s.optional(s.lazy(() => companyIntent1Schema)),
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

export const companySingleResponseDataInternalSchema: Schema<CompanySingleResponseData> =
  s.object<CompanySingleResponseData>(companySingleResponseDataProperties, {
    additionalProperties: s.json(),
  });

export const companySingleResponseDataSchema: Schema<CompanySingleResponseData> = s.lazySchema(() =>
  s.object<CompanySingleResponseData>(
    {
      ...companySingleResponseDataProperties,
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
