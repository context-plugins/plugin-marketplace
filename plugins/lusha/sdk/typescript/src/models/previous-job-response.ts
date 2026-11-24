import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  companyLushaApiDocumentationEnrichmentApiSchema,
  type CompanyLushaApiDocumentationEnrichmentApi,
} from "./company-lusha-api-documentation-enrichment-api.js";
import {
  jobTitleLushaApiDocumentationEnrichmentApiSchema,
  type JobTitleLushaApiDocumentationEnrichmentApi,
} from "./job-title-lusha-api-documentation-enrichment-api.js";

export type PreviousJobResponse = {
  jobTitle: JobTitleLushaApiDocumentationEnrichmentApi;
  company: CompanyLushaApiDocumentationEnrichmentApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const previousJobResponseSchema: Schema<PreviousJobResponse> = s.object<PreviousJobResponse>(
  {
    jobTitle: jobTitleLushaApiDocumentationEnrichmentApiSchema,
    company: companyLushaApiDocumentationEnrichmentApiSchema,
  },
  { additionalProperties: s.json() },
);
