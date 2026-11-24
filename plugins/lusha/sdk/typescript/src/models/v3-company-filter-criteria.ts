import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { businessModelSchema, type BusinessModel } from "./business-model.js";
import { companyTypeSchema, type CompanyType } from "./company-type.js";
import { foundedYearSchema, type FoundedYear } from "./founded-year.js";
import { fundingSchema, type Funding } from "./funding.js";
import { geographicDetailSchema, type GeographicDetail } from "./geographic-detail.js";
import { headquarterZipcodeSchema, type HeadquarterZipcode } from "./headquarter-zipcode.js";
import { intentTopicsConditionSchema, type IntentTopicsCondition } from "./intent-topics-condition.js";
import { intentTopicsOperatorSchema, type IntentTopicsOperator } from "./intent-topics-operator.js";
import { locationsZipcodeSchema, type LocationsZipcode } from "./locations-zipcode.js";
import { technologiesConditionSchema, type TechnologiesCondition } from "./technologies-condition.js";
import { v3LocationSchema, type V3Location } from "./v3-location.js";
import { v3RangeInternalSchema, v3RangeSchema, type V3Range } from "./v3-range.js";

export type V3CompanyFilterCriteria = {
  names?: string[];
  domains?: string[];
  ids?: string[];
  locations?: V3Location[];
  sizes?: V3Range[];
  revenues?: V3Range[];
  technologies?: string[];
  technologiesCondition?: TechnologiesCondition;
  industriesLabels?: string[];
  mainIndustriesIds?: number[];
  subIndustriesIds?: number[];
  intentTopics?: string[];
  intentTopicsCondition?: IntentTopicsCondition;
  intentMinScore?: number;
  intentMaxScore?: number;
  /**
   * Recommended over `intentTopicsCondition`. `any`/`all` are aliases for `or`/`and`.
   * `intentTopicsCondition` is not deprecated and remains accepted.
   */
  intentTopicsOperator?: IntentTopicsOperator;
  topicCountThreshold?: V3Range[];
  sicCodes?: string[];
  naicsCodes?: string[];
  /**
   * All funding sub-filters live under this single object. Every field is optional; combine any
   * subset.
   */
  funding?: Funding;
  /**
   * Filter by year the company was founded. Supports `min` (greater than or equal) and `max` (less
   * than or equal) range operators.
   */
  foundedYear?: FoundedYear[];
  /** Filter by business model. Accepted values: B2B, B2C, B2G. */
  businessModel?: BusinessModel[];
  /**
   * Filter by company type. Accepted values: Government, Private Company, Public Company,
   * Educational, Non Profit, Self Employed.
   */
  companyType?: CompanyType[];
  /** Filter by company LinkedIn URLs. */
  linkedinUrls?: string[];
  /** Filter by keywords associated with the company. */
  keywords?: string[];
  specialities?: string[];
  exactSpecialities?: string[];
  exactKeywords?: string[];
  keywordsSearchFields?: string[];
  previousCompanyDomains?: string[];
  previousCompanyNames?: string[];
  geographicDetails?: GeographicDetail[];
  locationsZipcodes?: LocationsZipcode[];
  headquarterZipcodes?: HeadquarterZipcode[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v3CompanyFilterCriteriaProperties: s.Shape<V3CompanyFilterCriteria> = {
  names: s.optional(s.array(s.string())),
  domains: s.optional(s.array(s.string())),
  ids: s.optional(s.array(s.string())),
  locations: s.optional(s.array(s.lazy(() => v3LocationSchema))),
  sizes: s.optional(s.array(s.lazy(() => v3RangeInternalSchema))),
  revenues: s.optional(s.array(s.lazy(() => v3RangeInternalSchema))),
  technologies: s.optional(s.array(s.string())),
  technologiesCondition: s.optional(s.lazy(() => technologiesConditionSchema)),
  industriesLabels: s.optional(s.array(s.string())),
  mainIndustriesIds: s.optional(s.array(s.int())),
  subIndustriesIds: s.optional(s.array(s.int())),
  intentTopics: s.optional(s.array(s.string())),
  intentTopicsCondition: s.optional(s.lazy(() => intentTopicsConditionSchema)),
  intentMinScore: s.optional(s.int()),
  intentMaxScore: s.optional(s.int()),
  intentTopicsOperator: s.optional(s.lazy(() => intentTopicsOperatorSchema)),
  topicCountThreshold: s.optional(s.array(s.lazy(() => v3RangeInternalSchema))),
  sicCodes: s.optional(s.array(s.string())),
  naicsCodes: s.optional(s.array(s.string())),
  funding: s.optional(s.lazy(() => fundingSchema)),
  foundedYear: s.optional(s.array(s.lazy(() => foundedYearSchema))),
  businessModel: s.optional(s.array(s.lazy(() => businessModelSchema))),
  companyType: s.optional(s.array(s.lazy(() => companyTypeSchema))),
  linkedinUrls: s.optional(s.array(s.string())),
  keywords: s.optional(s.array(s.string())),
  specialities: s.optional(s.array(s.string())),
  exactSpecialities: s.optional(s.array(s.string())),
  exactKeywords: s.optional(s.array(s.string())),
  keywordsSearchFields: s.optional(s.array(s.string())),
  previousCompanyDomains: s.optional(s.array(s.string())),
  previousCompanyNames: s.optional(s.array(s.string())),
  geographicDetails: s.optional(s.array(s.lazy(() => geographicDetailSchema))),
  locationsZipcodes: s.optional(s.array(s.lazy(() => locationsZipcodeSchema))),
  headquarterZipcodes: s.optional(s.array(s.lazy(() => headquarterZipcodeSchema))),
};

export const v3CompanyFilterCriteriaInternalSchema: Schema<V3CompanyFilterCriteria> =
  s.object<V3CompanyFilterCriteria>(v3CompanyFilterCriteriaProperties, { additionalProperties: s.json() });

export const v3CompanyFilterCriteriaSchema: Schema<V3CompanyFilterCriteria> = s.lazySchema(() =>
  s.object<V3CompanyFilterCriteria>(
    {
      ...v3CompanyFilterCriteriaProperties,
      sizes: s.optional(s.array(s.lazy(() => v3RangeSchema))),
      revenues: s.optional(s.array(s.lazy(() => v3RangeSchema))),
      intentMinScore: s.optional(s.int().check(s.gte(1), s.lte(100))),
      intentMaxScore: s.optional(s.int().check(s.gte(1), s.lte(100))),
      topicCountThreshold: s.optional(s.array(s.lazy(() => v3RangeSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
