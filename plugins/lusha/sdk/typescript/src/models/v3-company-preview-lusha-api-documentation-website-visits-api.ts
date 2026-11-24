import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { employeeCountSchema, type EmployeeCount } from "./employee-count.js";
import {
  locationLushaApiDocumentationWebsiteVisitsApiSchema,
  type LocationLushaApiDocumentationWebsiteVisitsApi,
} from "./location-lusha-api-documentation-website-visits-api.js";
import { socialLinksSchema, type SocialLinks } from "./social-links.js";
import { v3CanRevealItemSchema, type V3CanRevealItem } from "./v3-can-reveal-item.js";
import { v3ItemErrorSchema, type V3ItemError } from "./v3-item-error.js";

export type V3CompanyPreviewLushaApiDocumentationWebsiteVisitsApi = {
  clientReferenceId?: string;
  id?: string;
  name?: string;
  domain?: string;
  employeeCount?: EmployeeCount;
  industry?: string;
  location?: LocationLushaApiDocumentationWebsiteVisitsApi;
  socialLinks?: SocialLinks;
  /**
   * Available data points that can be revealed via Enrich Companies. Includes base firmographic
   * fields plus new revealable fields: employeesByDepartment, employeesByLocation,
   * employeesBySeniority, competitors, businessModel, phones, emails, keywords, socialLinks,
   * estimatedAnnualItSpend, monthlyWebsiteTraffic.
   */
  has?: string[];
  /**
   * Data fields that can be revealed via Enrich Companies, with the credit cost per field. A cost
   * of 0 means the field has already been revealed for this account.
   */
  canReveal?: V3CanRevealItem[];
  signalTypes?: string[];
  /** Per-item error in a batch response */
  error?: V3ItemError;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v3CompanyPreviewLushaApiDocumentationWebsiteVisitsApiSchema: Schema<V3CompanyPreviewLushaApiDocumentationWebsiteVisitsApi> =
  s.object<V3CompanyPreviewLushaApiDocumentationWebsiteVisitsApi>(
    {
      clientReferenceId: s.optional(s.string()),
      id: s.optional(s.string()),
      name: s.optional(s.string()),
      domain: s.optional(s.string()),
      employeeCount: s.optional(s.lazy(() => employeeCountSchema)),
      industry: s.optional(s.string()),
      location: s.optional(s.lazy(() => locationLushaApiDocumentationWebsiteVisitsApiSchema)),
      socialLinks: s.optional(s.lazy(() => socialLinksSchema)),
      has: s.optional(s.array(s.string())),
      canReveal: s.optional(s.array(s.lazy(() => v3CanRevealItemSchema))),
      signalTypes: s.optional(s.array(s.string())),
      error: s.optional(s.lazy(() => v3ItemErrorSchema)),
    },
    { additionalProperties: s.json() },
  );
