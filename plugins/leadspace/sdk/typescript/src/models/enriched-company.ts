import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { analytics1Schema, type Analytics1 } from "./analytics1.js";
import { companyFamilyTreeSchema, type CompanyFamilyTree } from "./company-family-tree.js";
import { companyFundingSchema, type CompanyFunding } from "./company-funding.js";
import { companyInvestorsSchema, type CompanyInvestors } from "./company-investors.js";
import { departmentSizeSchema, type DepartmentSize } from "./department-size.js";
import { employeesSchema, type Employees } from "./employees.js";
import { enrichedAddressSchema, type EnrichedAddress } from "./enriched-address.js";
import { intentModelingSchema, type IntentModeling } from "./intent-modeling.js";
import { matchingConfidenceSchema, type MatchingConfidence } from "./matching-confidence.js";
import { revenueDollarSchema, type RevenueDollar } from "./revenue-dollar.js";
import { signalsSchema, type Signals } from "./signals.js";

export type EnrichedCompany = {
  /** Leadspace unique company identifier */
  ugCompanyId?: string;
  /** Legacy v3 company identifier that mirrors ug_company_id; scheduled for sunset in 2026 */
  lsId?: string;
  name?: string;
  originalName?: string;
  description?: string;
  website?: string;
  phone?: string;
  industry?: string;
  subIndustry?: string;
  sic?: string;
  sicDescription?: string;
  naics?: string;
  naicsDescription?: string;
  ownership?: string;
  linkedinProfile?: string;
  latitude?: string;
  longitude?: string;
  primaryLocation?: string;
  address?: EnrichedAddress;
  employees?: Employees;
  revenueDollar?: RevenueDollar;
  matchingConfidence?: MatchingConfidence;
  /** The company hierarchy in addition to the matched company */
  familyTree?: CompanyFamilyTree;
  departmentSize?: DepartmentSize;
  funding?: CompanyFunding;
  investors?: CompanyInvestors;
  signals?: Signals;
  intentModelingV4?: IntentModeling;
  domainIntent?: string;
  specialties?: string[];
  analytics?: Analytics1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const enrichedCompanySchema: Schema<EnrichedCompany> = s.object<EnrichedCompany>(
  {
    ugCompanyId: s.optional(s.string()),
    lsId: s.optional(s.string()),
    name: s.optional(s.string()),
    originalName: s.optional(s.string()),
    description: s.optional(s.string()),
    website: s.optional(s.string()),
    phone: s.optional(s.string()),
    industry: s.optional(s.string()),
    subIndustry: s.optional(s.string()),
    sic: s.optional(s.string()),
    sicDescription: s.optional(s.string()),
    naics: s.optional(s.string()),
    naicsDescription: s.optional(s.string()),
    ownership: s.optional(s.string()),
    linkedinProfile: s.optional(s.string()),
    latitude: s.optional(s.string()),
    longitude: s.optional(s.string()),
    primaryLocation: s.optional(s.string()),
    address: s.optional(s.lazy(() => enrichedAddressSchema)),
    employees: s.optional(s.lazy(() => employeesSchema)),
    revenueDollar: s.optional(s.lazy(() => revenueDollarSchema)),
    matchingConfidence: s.optional(s.lazy(() => matchingConfidenceSchema)),
    familyTree: s.optional(s.lazy(() => companyFamilyTreeSchema)),
    departmentSize: s.optional(s.lazy(() => departmentSizeSchema)),
    funding: s.optional(s.lazy(() => companyFundingSchema)),
    investors: s.optional(s.lazy(() => companyInvestorsSchema)),
    signals: s.optional(s.lazy(() => signalsSchema)),
    intentModelingV4: s.optional(s.lazy(() => intentModelingSchema)),
    domainIntent: s.optional(s.string()),
    specialties: s.optional(s.array(s.string())),
    analytics: s.optional(s.lazy(() => analytics1Schema)),
    _keysMap: {
      ugCompanyId: "ug_company_id",
      lsId: "ls_id",
      originalName: "original_name",
      subIndustry: "sub_industry",
      linkedinProfile: "linkedin_profile",
      primaryLocation: "primary_location",
      revenueDollar: "revenue_dollar",
      matchingConfidence: "matching_confidence",
      familyTree: "family_tree",
      departmentSize: "department_size",
      intentModelingV4: "intent_modeling_v4",
      domainIntent: "domain_intent",
    },
  },
  { additionalProperties: s.json() },
);
