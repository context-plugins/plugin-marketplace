import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companySchema, type Company } from "./company.js";
import { jobTitleSchema, type JobTitle } from "./job-title.js";
import { locationSchema, type Location } from "./location.js";
import { socialLinksSchema, type SocialLinks } from "./social-links.js";
import { v3CanRevealItemSchema, type V3CanRevealItem } from "./v3-can-reveal-item.js";
import { v3ItemErrorSchema, type V3ItemError } from "./v3-item-error.js";

export type V3ContactPreview = {
  clientReferenceId?: string;
  id?: string;
  firstName?: string;
  lastName?: string;
  jobTitle?: JobTitle;
  company?: Company;
  location?: Location;
  socialLinks?: SocialLinks;
  has?: string[];
  canReveal?: V3CanRevealItem[];
  signalTypes?: string[];
  /** Per-item error in a batch response */
  error?: V3ItemError;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v3ContactPreviewSchema: Schema<V3ContactPreview> = s.object<V3ContactPreview>(
  {
    clientReferenceId: s.optional(s.string()),
    id: s.optional(s.string()),
    firstName: s.optional(s.string()),
    lastName: s.optional(s.string()),
    jobTitle: s.optional(s.lazy(() => jobTitleSchema)),
    company: s.optional(s.lazy(() => companySchema)),
    location: s.optional(s.lazy(() => locationSchema)),
    socialLinks: s.optional(s.lazy(() => socialLinksSchema)),
    has: s.optional(s.array(s.string())),
    canReveal: s.optional(s.array(s.lazy(() => v3CanRevealItemSchema))),
    signalTypes: s.optional(s.array(s.string())),
    error: s.optional(s.lazy(() => v3ItemErrorSchema)),
  },
  { additionalProperties: s.json() },
);
