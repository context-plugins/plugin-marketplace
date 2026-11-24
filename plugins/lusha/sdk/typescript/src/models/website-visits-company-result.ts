import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { employeeCountSchema, type EmployeeCount } from "./employee-count.js";
import {
  locationLushaApiDocumentationWebsiteVisitsApiSchema,
  type LocationLushaApiDocumentationWebsiteVisitsApi,
} from "./location-lusha-api-documentation-website-visits-api.js";
import { scoreBandSchema, type ScoreBand } from "./score-band.js";
import { socialLinksSchema, type SocialLinks } from "./social-links.js";
import { v3CanRevealItemSchema, type V3CanRevealItem } from "./v3-can-reveal-item.js";
import { v3ItemErrorSchema, type V3ItemError } from "./v3-item-error.js";

export type WebsiteVisitsCompanyResult = {
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
  /** Display score (0–100). */
  score?: number;
  /** Qualitative score band. */
  scoreBand?: ScoreBand;
  /** Total sessions in the window. */
  totalSessions?: number;
  /** Distinct visitors in the window. */
  uniqueVisitors?: number;
  /** Average session length in minutes. */
  avgSessionMinutes?: number;
  /** Distinct days with activity. */
  daysVisited?: number;
  /** High-intent pageviews in the window. */
  highIntentPageviews?: number;
  /** Days since the most recent visit. */
  daysSinceLastVisit?: number;
  /** Date of the last visit in the window. */
  lastVisit?: string;
  /** Primary visitor country (ISO 3166-1 alpha-2). Omitted if unavailable. */
  visitorCountry?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const websiteVisitsCompanyResultSchema: Schema<WebsiteVisitsCompanyResult> =
  s.object<WebsiteVisitsCompanyResult>(
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
      score: s.optional(s.float64()),
      scoreBand: s.optional(s.lazy(() => scoreBandSchema)),
      totalSessions: s.optional(s.float64()),
      uniqueVisitors: s.optional(s.float64()),
      avgSessionMinutes: s.optional(s.float64()),
      daysVisited: s.optional(s.float64()),
      highIntentPageviews: s.optional(s.float64()),
      daysSinceLastVisit: s.optional(s.float64()),
      lastVisit: s.optional(s.dateOnly()),
      visitorCountry: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
