import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompanyLushaApiDocumentationEnrichmentApi = {
  /** The name of the company, Required if no domain. */
  name?: string;
  /** The domain of the company, Required if no name. */
  domain?: string;
  /** Indicates whether this is the person's current company */
  isCurrent: boolean;
  /** The job title of the person at the company */
  jobTitle?: string;
  /** The fully qualified domain name of the company */
  fqdn?: string;
  /** The social ID associated with the company (if available) */
  companySocialId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyLushaApiDocumentationEnrichmentApiSchema: Schema<CompanyLushaApiDocumentationEnrichmentApi> =
  s.object<CompanyLushaApiDocumentationEnrichmentApi>(
    {
      name: s.optional(s.string()),
      domain: s.optional(s.string()),
      isCurrent: s.boolean(),
      jobTitle: s.optional(s.string()),
      fqdn: s.optional(s.string()),
      companySocialId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
