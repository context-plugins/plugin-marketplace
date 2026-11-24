import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  companyLushaApiDocumentationEnrichmentApiSchema,
  type CompanyLushaApiDocumentationEnrichmentApi,
} from "./company-lusha-api-documentation-enrichment-api.js";

export type ContactSearchBulk = {
  /** A unique sequential ID to associate with the contact object in the API response */
  contactId: string;
  /** The unique person identifier in Lusha */
  personId?: string;
  /** The full name of the person */
  fullName?: string;
  /** The raw location of the person */
  location?: string;
  /** The LinkedIn URL of the person */
  linkedinUrl?: string;
  /** The email address of the person */
  email?: string;
  /**
   * Details of the company where the contact is currently employed (or previously employed if
   * applicable)
   */
  companies?: CompanyLushaApiDocumentationEnrichmentApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contactSearchBulkSchema: Schema<ContactSearchBulk> = s.object<ContactSearchBulk>(
  {
    contactId: s.string(),
    personId: s.optional(s.string()),
    fullName: s.optional(s.string()),
    location: s.optional(s.string()),
    linkedinUrl: s.optional(s.string()),
    email: s.optional(s.string()),
    companies: s.optional(s.array(s.lazy(() => companyLushaApiDocumentationEnrichmentApiSchema))),
  },
  { additionalProperties: s.json() },
);
