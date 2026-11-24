import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companyFundingSchema, type CompanyFunding } from "./company-funding.js";
import { companyIntentSchema, type CompanyIntent } from "./company-intent.js";
import { companyTechnologySchema, type CompanyTechnology } from "./company-technology.js";

export type CompanyLushaApiDocumentationProspectingSearchEnrichApi = {
  revenueRange?: number[];
  funding?: CompanyFunding;
  intent?: CompanyIntent;
  mainIndustry?: string;
  subIndustry?: string;
  technologies?: CompanyTechnology[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyLushaApiDocumentationProspectingSearchEnrichApiSchema: Schema<CompanyLushaApiDocumentationProspectingSearchEnrichApi> =
  s.object<CompanyLushaApiDocumentationProspectingSearchEnrichApi>(
    {
      revenueRange: s.optional(s.array(s.float64())),
      funding: s.optional(s.lazy(() => companyFundingSchema)),
      intent: s.optional(s.lazy(() => companyIntentSchema)),
      mainIndustry: s.optional(s.string()),
      subIndustry: s.optional(s.string()),
      technologies: s.optional(s.array(s.lazy(() => companyTechnologySchema))),
    },
    { additionalProperties: s.json() },
  );
