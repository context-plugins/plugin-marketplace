import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  companyLushaApiDocumentationEnrichApiSchema,
  type CompanyLushaApiDocumentationEnrichApi,
} from "./company-lusha-api-documentation-enrich-api.js";
import { jobTitleSchema, type JobTitle } from "./job-title.js";

export type PreviousEmployment = {
  company?: CompanyLushaApiDocumentationEnrichApi;
  jobTitle?: JobTitle;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const previousEmploymentSchema: Schema<PreviousEmployment> = s.object<PreviousEmployment>(
  {
    company: s.optional(s.lazy(() => companyLushaApiDocumentationEnrichApiSchema)),
    jobTitle: s.optional(s.lazy(() => jobTitleSchema)),
  },
  { additionalProperties: s.json() },
);
